// scripts.js
//
// JavaScript loaed by index.html in support of exercise

const maxTrailLength = 20;
const trailPersistenceTime = 20; // milliseconds

let mouseTrailReaperClock = null;

window.addEventListener("mousemove", (event) => {
    let trail = document.createElement("div");
    trail.className = "trail";
    trail.style.left = event.pageX - 4 + "px";
    trail.style.top = event.pageY - 4 + "px";
    document.body.appendChild(trail);
    if (document.getElementsByClassName("trail").length > maxTrailLength) {
        document.body.removeChild(document.getElementsByClassName("trail")[0]);
    }
    if (
        document.getElementsByClassName("trail").length > 0 &&
        !mouseTrailReaperClock
    ) {
        mouseTrailReaperClock = setInterval(() => {
            if (document.getElementsByClassName("trail").length > 0) {
                document.body.removeChild(document.getElementsByClassName("trail")[0]);
            }
            if (document.getElementsByClassName("trail").length == 0) {
                clearInterval(mouseTrailReaperClock);
                mouseTrailReaperClock = null;
            }
        }, trailPersistenceTime);
    }
});