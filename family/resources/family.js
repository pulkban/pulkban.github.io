(function () {
  "use strict";

  const tree = document.getElementById("family-tree");
  const count = document.getElementById("family-count");
  const dataSource = document.currentScript.dataset.familySrc;

  function initials(name) {
    return name.split(/\s+/).map(part => part[0]).slice(0, 2).join("").toUpperCase();
  }

  function parseDob(value) {
    const match = String(value || "").match(/^(\d{1,2})[.\/-](\d{1,2})[.\/-](\d{4})$/);
    if (!match) return null;
    const date = new Date(Number(match[3]), Number(match[2]) - 1, Number(match[1]));
    return Number.isNaN(date.getTime()) ? null : date;
  }

  function ageFromDob(dob) {
    const birthDate = parseDob(dob);
    if (!birthDate) return null;
    const today = new Date();
    let age = today.getFullYear() - birthDate.getFullYear();
    if (today.getMonth() < birthDate.getMonth() ||
        (today.getMonth() === birthDate.getMonth() && today.getDate() < birthDate.getDate())) age--;
    return age;
  }

  function formatDob(dob) {
    const birthDate = parseDob(dob);
    if (!birthDate || !/[.\/-]/.test(String(dob))) return String(dob || "");
    const day = String(birthDate.getDate()).padStart(2, "0");
    const month = birthDate.toLocaleString("en-US", { month: "short" });
    return `${day}-${month}`;
  }

  function formatPlace(place) {
    return String(place || "").replace(/Thathingarpet/gi, "T. Pet");
  }

  function personCard(person) {
    const card = document.createElement("article");
    card.className = "person-card";

    const photo = document.createElement("span");
    photo.className = "photo";
    photo.dataset.initials = initials(person.name);
    if (person.picture) {
      const image = document.createElement("img");
      image.src = person.picture;
      image.alt = person.name;
      image.loading = "lazy";
      image.addEventListener("error", () => image.remove());
      photo.appendChild(image);
    }

    const copy = document.createElement("span");
    copy.className = "person-copy";
    const name = document.createElement("strong");
    name.textContent = person.name;
    const details = document.createElement("span");
    details.className = "person-details";
    const age = ageFromDob(person.dob);
    if (person.dob) {
      const dob = document.createElement("small");
      const displayedDob = formatDob(person.dob);
      dob.textContent = age === null ? displayedDob : `${displayedDob} / ${age} yrs`;
      details.appendChild(dob);
    }
    if (person.place) {
      const place = document.createElement("small");
      place.className = "person-place";
      place.textContent = formatPlace(person.place);
      details.appendChild(place);
    }
    copy.append(name, details);
    card.append(photo, copy);
    return card;
  }

  function branch(person) {
    const item = document.createElement("li");
    const unit = document.createElement("div");
    unit.className = "family-unit";
    unit.appendChild(personCard(person));
    if (person.spouse) {
      const link = document.createElement("span");
      link.className = "spouse-link";
      link.setAttribute("aria-hidden", "true");
      unit.append(link, personCard(person.spouse));
    }
    item.appendChild(unit);
    if (person.children?.length) {
      const toggle = document.createElement("button");
      toggle.type = "button";
      toggle.className = "branch-toggle";
      toggle.textContent = "\u25B2";
      toggle.title = `Collapse ${person.name}'s branch`;
      toggle.setAttribute("aria-expanded", "true");
      const children = document.createElement("ul");
      children.className = "children";
      person.children.forEach(child => children.appendChild(branch(child)));
      toggle.addEventListener("click", () => {
        children.hidden = !children.hidden;
        toggle.textContent = children.hidden ? "\u25BC" : "\u25B2";
        toggle.title = `${children.hidden ? "Expand" : "Collapse"} ${person.name}'s branch`;
        toggle.setAttribute("aria-expanded", String(!children.hidden));
      });
      item.append(toggle, children);
    }
    return item;
  }

  function countPeople(person) {
    return 1 + (person.spouse ? 1 : 0) +
      (person.children || []).reduce((total, child) => total + countPeople(child), 0);
  }

  function render(families) {
      const roots = Array.isArray(families) ? families : [families];
      const list = document.createElement("ul");
      roots.forEach(family => list.appendChild(branch(family)));
      tree.replaceChildren(list);
      const total = roots.reduce((sum, family) => sum + countPeople(family), 0);
      count.textContent = `${total} family members`;
      document.getElementById("expand-all")?.addEventListener("click", () => {
        tree.querySelectorAll(".children").forEach(children => { children.hidden = false; });
        tree.querySelectorAll(".branch-toggle").forEach(toggle => {
          toggle.textContent = "\u25B2";
          toggle.setAttribute("aria-expanded", "true");
        });
      });
      document.getElementById("collapse-all")?.addEventListener("click", () => {
        tree.querySelectorAll(".children").forEach(children => { children.hidden = true; });
        tree.querySelectorAll(".branch-toggle").forEach(toggle => {
          toggle.textContent = "\u25BC";
          toggle.setAttribute("aria-expanded", "false");
        });
      });
  }

  const embeddedData = document.getElementById("family-data");
  if (embeddedData) {
    try {
      render(JSON.parse(embeddedData.textContent));
    } catch (error) {
      tree.innerHTML = `<p class="status error">Unable to load the family data.<br><small>${error.message}</small></p>`;
    }
  } else {
    fetch(dataSource)
      .then(response => {
        if (!response.ok) throw new Error(`Data request failed (${response.status})`);
        return response.json();
      })
      .then(render)
      .catch(error => {
        tree.innerHTML = `<p class="status error">Unable to load the family data.<br><small>${error.message}</small></p>`;
      });
  }
})();
