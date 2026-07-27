(function () {
  "use strict";

  const treeRoot = document.getElementById("family-tree");

  function initials(name) {
    return name.split(/\s+/).map(part => part[0]).slice(0, 2).join("").toUpperCase();
  }

  function parseDob(dob) {
    if (!dob) return null;
    const value = String(dob).trim();
    const numericDate = value.match(/^(\d{1,2})[-/](\d{1,2})[-/](\d{4})$/);
    if (numericDate) {
      const day = Number(numericDate[1]);
      const month = Number(numericDate[2]);
      const year = Number(numericDate[3]);
      const parsed = new Date(year, month - 1, day);
      if (parsed.getFullYear() === year &&
          parsed.getMonth() === month - 1 &&
          parsed.getDate() === day) {
        return parsed;
      }
      return null;
    }
    const parsed = new Date(value);
    return Number.isNaN(parsed.getTime()) ? null : parsed;
  }

  function ageFromDob(dob) {
    const birthDate = parseDob(dob);
    if (!birthDate) return null;
    const today = new Date();
    let age = today.getFullYear() - birthDate.getFullYear();
    const birthdayPending = today.getMonth() < birthDate.getMonth() ||
      (today.getMonth() === birthDate.getMonth() && today.getDate() < birthDate.getDate());
    if (birthdayPending) age--;
    return age;
  }

  function formatDob(dob) {
    if (!dob) return "";
    const birthDate = parseDob(dob);
    if (!birthDate) return dob;
    const day = String(birthDate.getDate()).padStart(2, "0");
    const month = birthDate.toLocaleString("en-US", { month: "short" });
    return `${day}-${month}-${birthDate.getFullYear()}`;
  }

  function detailLine(value, className) {
    const line = document.createElement("small");
    line.textContent = value;
    if (className) line.className = className;
    return line;
  }

  function personCard(person) {
    const card = document.createElement("article");
    card.className = "person-card";

    const photo = document.createElement("span");
    photo.className = "photo";
    photo.dataset.initials = initials(person.name);
    if (person.picture) {
      const img = document.createElement("img");
      img.src = person.picture;
      img.alt = "";
      img.loading = "lazy";
      img.addEventListener("error", () => img.remove());
      photo.appendChild(img);
    }

    const copy = document.createElement("span");
    copy.className = "person-copy";
    const name = document.createElement("strong");
    name.textContent = person.name;
    const details = document.createElement("span");
    details.className = "person-details";
    const age = ageFromDob(person.dob);
    if (person.dob) {
      const dateAndAge = age === null
        ? formatDob(person.dob)
        : `${formatDob(person.dob)} / ${age} yrs`;
      details.appendChild(detailLine(dateAndAge));
    }
    if (person.place) details.appendChild(detailLine(person.place, "person-place"));
    copy.append(name, details);
    card.append(photo, copy);
    return card;
  }

  function branch(person) {
    const li = document.createElement("li");
    const familyUnit = document.createElement("div");
    familyUnit.className = "family-unit";
    familyUnit.appendChild(personCard(person));

    if (person.spouse) {
      const link = document.createElement("span");
      link.className = "spouse-link";
      link.setAttribute("aria-hidden", "true");
      familyUnit.append(link, personCard(person.spouse));
    }
    li.appendChild(familyUnit);

    if (person.children && person.children.length) {
      const toggle = document.createElement("button");
      toggle.type = "button";
      toggle.className = "branch-toggle";
      toggle.textContent = "−";
      toggle.title = `Collapse the branch below ${person.name}`;
      toggle.setAttribute("aria-expanded", "true");

      const children = document.createElement("ul");
      children.className = "children";
      person.children.forEach(child => children.appendChild(branch(child)));

      toggle.addEventListener("click", () => {
        const collapsed = li.classList.toggle("collapsed");
        toggle.textContent = collapsed ? "+" : "−";
        toggle.setAttribute("aria-expanded", String(!collapsed));
        toggle.title = `${collapsed ? "Expand" : "Collapse"} the branch below ${person.name}`;
      });
      li.append(toggle, children);
    }
    return li;
  }

  function setAll(collapsed) {
    document.querySelectorAll(".tree li:has(> .children)").forEach(li => {
      li.classList.toggle("collapsed", collapsed);
      const toggle = li.querySelector(":scope > .branch-toggle");
      toggle.textContent = collapsed ? "+" : "−";
      toggle.setAttribute("aria-expanded", String(!collapsed));
    });
  }

  function countPeople(person) {
    return 1 + (person.spouse ? 1 : 0) +
      (person.children || []).reduce((sum, child) => sum + countPeople(child), 0);
  }

  const rootList = document.createElement("ul");
  rootList.appendChild(branch(FAMILY_DATA));
  treeRoot.appendChild(rootList);
  document.getElementById("family-count").textContent =
    `${countPeople(FAMILY_DATA)} family members`;

  document.getElementById("expand-all").addEventListener("click", () => setAll(false));
  document.getElementById("collapse-all").addEventListener("click", () => setAll(true));
})();
