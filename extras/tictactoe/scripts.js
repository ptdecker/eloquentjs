// scripts.js
//
// JavaScript loaed by index.html in support of exercise

const size = 3;
const table = document.createElement("table");
let turn = "X";
let row;
document.body.appendChild(table);
for (i = 0; i < size * size; i++) {
    if (i % size == 0) {
        row = document.createElement("tr");
        table.appendChild(row);
    }
    cell = document.createElement("td");
    row.appendChild(cell);
    cell.innerText = "-";
    cell.setAttribute("id", `${i}`);
    const element = cell;
    cell.addEventListener(
        "click",
        () => {
            element.innerText = turn;
            turn = turn == "X" ? "O" : "X";
            evaluate();
        }, { once: true }
    );
}

function evaluate(cells) {
    let state = "";
    for (i = 0; i < size * size; i++) {
        cell = document.getElementById(`${i}`);
        state += cell.innerText;
    }
    console.log(state);
    console.log(t90(state));
    console.log(t180(state));
    console.log(sw(state));
    console.log(sw(t90(state)));
    console.log(sw(t180(state)));
}

t90 = (x) => x[6] + x[3] + x[0] + x[7] + x[4] + x[1] + x[8] + x[5] + x[2];
t180 = (x) => t90(t90(x));
sw = (x) => x.replace("X", "T").replace("O", "X").replace("T", "O");

let allStates = new Set();
let state = [];
for (let i = 0; i < Math.pow(3, 9); i++) {
    let x = i;
    for (let j = 0; j < 9; j++) {
        state[j] = x % 3;
        x = Math.floor(x / 3);
    }
    xos = state.join("");
    xos = xos.replace(/0/g, "-");
    xos = xos.replace(/1/g, "X");
    xos = xos.replace(/2/g, "O");
    let xcount = xos.split("X").length - 1;
    let ycount = xos.split("O").length - 1;
    if (Math.abs(xcount - ycount) > 1) {
        continue;
    }
    if (allStates.has(xos)) {
        continue;
    }
    if (allStates.has(t90(xos))) {
        continue;
    }
    if (allStates.has(t90(t90(xos)))) {
        continue;
    }
    if (allStates.has(t90(t90(t90(xos))))) {
        continue;
    }
    if (allStates.has(sw(xos))) {
        continue;
    }
    if (allStates.has(t90(sw(xos)))) {
        continue;
    }
    if (allStates.has(t90(t90(sw(xos))))) {
        continue;
    }
    if (allStates.has(t90(t90(t90(sw(xos)))))) {
        continue;
    }
    //    if (xos.match(/X{3}/) || xos.match(/O{3}/)) {
    //        continue;
    //    }
    //    if (xos.match(/X.{2}X.{2}X/) || xos.match(/O.{2}O.{2}O/)) {
    //        continue;
    //    }
    allStates.add(xos);
}
console.log(allStates);
let possibleWins = [];
for (s of allStates) {
    let xcount = s.split("X").length - 1;
    let ycount = s.split("O").length - 1;
    if (xcount > 2 || ycount > 2) {
        possibleWins.push(s);
    }
}
console.log(possibleWins);
for (s of possibleWins) {
    allStates.delete(s);
}
console.log(allStates);
xMoves = [];
yMoves = [];
for (s of allStates) {
    let xcount = s.split("X").length - 1;
    let ycount = s.split("O").length - 1;
    if (xcount <= ycount) {
        xMoves.push(s);
    } else {
        yMoves.push(s);
    }
}
for (s of xMoves) console.log(s);
for (s of yMoves) console.log(s);