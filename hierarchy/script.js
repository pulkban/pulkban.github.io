document.getElementById('csvFile').addEventListener('change', handleFileSelect, false);

function handleFileSelect(event) {
    const file = event.target.files[0];
    if (file) {
        const reader = new FileReader();
        reader.onload = function(e) {
            const csvText = e.target.result;
            Papa.parse(csvText, {
                header: true,
                dynamicTyping: true,
                complete: function(results) {
                    const data = results.data;
                    const hierarchy = buildHierarchy(data);
                    displayHierarchy(hierarchy);
                    displayHierarchyText(hierarchy);
                }
            });
        };
        reader.readAsText(file);
    }
}

function buildHierarchy(data) {
    const hierarchy = {};
    data.forEach(row => {
        const parent = row['found_in'];
        const method = row['method'];
        if (!hierarchy[parent]) {
            hierarchy[parent] = [];
        }
        hierarchy[parent].push(method);
    });
    return hierarchy;
}

function createHierarchyList(hierarchy, parent, isChild) {
    const methodsList = document.createElement('ul');
    if (hierarchy[parent]) {
        hierarchy[parent].forEach(method => {
            const methodElement = document.createElement('li');
            methodElement.textContent = method;
            if (isChild) {
                methodElement.className = 'child';
            }
            const childList = createHierarchyList(hierarchy, method, true);
            if (childList) {
                methodElement.appendChild(childList);
            }
            methodsList.appendChild(methodElement);
        });
    }
    return methodsList.children.length ? methodsList : null;
}

function displayHierarchy(hierarchy) {
    const container = document.getElementById('hierarchy');
    container.innerHTML = '';
    Object.keys(hierarchy).forEach(parent => {
        if (!parent.startsWith('m') && parent !== 'undefined') {
            const parentElement = document.createElement('div');
            parentElement.className = 'parent';
            parentElement.textContent = parent;
            const methodsList = createHierarchyList(hierarchy, parent, false);
            if (methodsList) {
                parentElement.appendChild(methodsList);
            }
            container.appendChild(parentElement);
        }
    });
}

function buildHierarchyText(hierarchy, parent, level) {
    let text = '';
    if (hierarchy[parent]) {
        hierarchy[parent].forEach(method => {
            text += '----'.repeat(level) + method + '\n';
            text += buildHierarchyText(hierarchy, method, level + 1);
        });
    }
    return text;
}

function displayHierarchyText(hierarchy) {
    const textarea = document.getElementById('hierarchyText');
    let text = '';
    Object.keys(hierarchy).forEach(parent => {
        if (!parent.startsWith('m') && parent !== 'undefined') {
            text += parent + '\n';
            text += buildHierarchyText(hierarchy, parent, 1);
        }
    });
    textarea.value = text;
}
