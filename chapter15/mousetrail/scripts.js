// scripts.js
//
// JavaScript loaed by index.html in support of exercise

const maxTrailLength = 20;

let trailHistory = [];

let clock = setInterval(() => {
    if (trailHistory.length > 0) {
        document.body.removeChild(trailHistory.shift());
    }
}, 20);

window.addEventListener("mousemove", (event) => {
    let trail = document.createElement("div");
    trail.className = "trail";
    trail.style.left = event.pageX - 4 + "px";
    trail.style.top = event.pageY - 4 + "px";
    trailHistory.push(trail);
    document.body.appendChild(trail);
    if (trailHistory.length > maxTrailLength) {
        document.body.removeChild(trailHistory.shift());
    }
});