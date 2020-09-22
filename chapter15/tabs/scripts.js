// scripts.js
//
// JavaScript loaed by index.html in support of exercise

let tabList = [];

function asTabs(node) {
    const childElements = node.children;
    let firstTab = "";
    for (const element of childElements) {
        if (element.dataset.tabname) {
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
    }
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

function openTab(tabName) {
    for (const tabElement of tabList) {
        if (tabElement.name == tabName) {
            tabElement.tabDiv.style.display = "initial";
            tabElement.button.classList.add("tab-selected");
        } else {
            tabElement.tabDiv.style.display = "none";
            tabElement.button.classList.remove("tab-selected");
        }
    }
}

asTabs(document.querySelector("tab-panel"));