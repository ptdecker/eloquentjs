// scripts.js
//
// JavaScript loaed by index.html in support of exercise

let tabList = [];

// Implemnt tabs for the passed node.
function asTabs(node) {
    const childElements = node.children;
    let firstTab = "";

    // Build a list of the names of the divs in the passed node that
    // should be treated as tabs. Mark them as such with a proper class.
    // And, hide all but the first one.
    for (const element of childElements) {
        // Skip divs that do not have a defined tag name
        if (!element.dataset.tabname) {
            continue;
        }
        element.classList.add("tab-body");
        tabList.push({
            tabDiv: element,
            name: element.dataset.tabname,
        });
        if (tabList.length > 1) {
            element.style.display = "none";
        } else {
            firstTab = element.dataset.tabname;
        }
    }

    // Build the tab bar dynamically and insert it into the DOM as the first
    // element in the passed node.
    let tabBar = document.createElement("div");
    tabBar.classList.add("tab-bar");
    for (const tabElement of tabList) {
        let tabButton = document.createElement("button");
        tabButton.classList.add("tab-bar-button");
        if (tabElement.name == firstTab) {
            tabButton.classList.add("tab-selected");
        }
        tabButton.setAttribute("onclick", `openTab('${tabElement.name}')`);
        tabButton.innerText = tabElement.name;
        tabBar.appendChild(tabButton);
        tabElement.button = tabButton;
    }
    node.insertBefore(tabBar, node.firstChild);
}

// Handle opening a named tab
function openTab(tabName) {
    for (const tabElement of tabList) {
        if (tabElement.name == tabName) {
            tabElement.tabDiv.removeAttribute("style");
            tabElement.button.classList.add("tab-selected");
            continue;
        }
        tabElement.tabDiv.style.display = "none";
        tabElement.button.classList.remove("tab-selected");
    }
}

asTabs(document.querySelector("tab-panel"));