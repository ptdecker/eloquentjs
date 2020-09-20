// scripts.js
//
// JavaScript loaed by index.html in support of exercise

const explosionEmoji = String.fromCodePoint(0x1f4a5);

let ballonFontSize = 1;

function ballonEvent(event) {
    if (event.key != "ArrowUp" && event.key != "ArrowDown") {
        return;
    }
    if (event.key == "ArrowDown" && ballonFontSize > 1) {
        ballonFontSize -= 1;
        document.getElementById("baloon").style.fontSize = ballonFontSize + "em";
    }
    if (event.key == "ArrowUp" && ballonFontSize < 10) {
        ballonFontSize += 1;
        document.getElementById("baloon").style.fontSize = ballonFontSize + "em";
    }
    if (event.key == "ArrowUp" && ballonFontSize == 10) {
        document.getElementById("baloon").textContent = explosionEmoji;
        removeEventListener("keydown", ballonEvent);
    }
    event.stopPropagation();
}

window.addEventListener("keydown", ballonEvent);