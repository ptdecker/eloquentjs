// scripts.js
//
// JavaScript loaed by index.html in support of exercise

// State storage
let oldHTMLLine;

// Moving Through the Tree
function talksAbout(node, string) {
    if (node.nodeType == Node.ELEMENT_NODE) {
        for (let i = 0; i < node.childNodes.length; i++) {
            if (talksAbout(node.childNodes[i], string)) {
                return true;
            }
        }
        return false;
    } else if (node.nodeType == Node.TEXT_NODE) {
        return node.nodeValue.indexOf(string) > -1;
    }
}

console.log(talksAbout(document.body, "book"));

// Finding elements
let link = document.body.getElementsByTagName("a")[0];
console.log(link.href);

let ostrich = document.getElementById("gertrude");
console.log(ostrich.src);

// Changing the Document
// NOTE:  Changing the ordering of <p> tags will impact the function of
// this section
let paragraphs = document.body.getElementsByTagName("p");
document.body.insertBefore(paragraphs[8], paragraphs[6]);
document.body.insertBefore(paragraphs[8], paragraphs[7]);

// Creating Nodes
function toggleImages() {
    let button = document.getElementById("btnToggle");
    if (button.innerText === "Replace Images") {
        oldHTMLLine = document.getElementById("toggleText").innerHTML;
        let images = document.body.getElementsByTagName("img");
        for (let i = images.length - 1; i >= 0; i--) {
            let image = images[i];
            if (image.alt) {
                let text = document.createTextNode(image.alt);
                image.parentNode.replaceChild(text, image);
            }
        }
        button.innerText = "Restore Images";
    } else {
        document.getElementById("toggleText").innerHTML = oldHTMLLine;
        button.innerText = "Replace Images";
    }
}

function elt(type, ...children) {
    let node = document.createElement(type);
    for (let child of children) {
        if (typeof child != "string") {
            node.appendChild(child);
        } else {
            node.appendChild(document.createTextNode(child));
        }
    }
    return node;
}

document.getElementById("quote").appendChild(
    elt("footer", "--",
        elt("strong", "Karl Popper"),
        ", preface to the second edition of ",
        elt("em", "The Open Society and Its Enemies"),
        ", 1950"));

// Attributes
let paras = document.body.getElementsByTagName("p");
for (let para of Array.from(paras)) {
    if (para.getAttribute("data-classified") == "secret") {
        para.remove();
    }
}

// Layout
let para = document.getElementById("boxedIn");
console.log(`clientHeight: ${para.clientHeight}`);
console.log(`offsetHeight: ${para.offsetHeight}`);

function time(name, action) {
    let start = Date.now()
    action();
    console.log(`${name} took ${Date.now() - start} ms`);
}

time("naive", () => {
    let target = document.getElementById("one");
    while (target.offsetWidth < 2000) {
        target.appendChild(document.createTextNode("X"));
    }
});

time("clever", () => {
    let target = document.getElementById("two");
    target.appendChild(document.createTextNode("XXXXX"));
    let total = Math.ceil(2000 / (target.offsetWidth / 5));
    target.firstChild.nodeValue = "X".repeat(total);
});

// Styling
let para2 = document.getElementById("para");
console.log(para2.style.color);
para2.style.color = "magenta";

// Query Selectors
function count(selector) {
    return document.querySelectorAll(selector).length;
}
console.log(count("p"));
console.log(count(".animal"));
console.log(count("p .animal"));
console.log(count("p > .animal"));

// Position and Animating
let cat = document.getElementById("movingCat");
let angle = Math.PI / 2;

function animate(time, lastTime) {
    if (lastTime != null) {
        angle += (time - lastTime) * 0.001;
    }
    cat.style.top = (Math.sin(angle) * 20) + "px";
    cat.style.left = (Math.cos(angle) * 20) + "px";
    requestAnimationFrame(newTime => animate(newTime, time));
}
requestAnimationFrame(animate);