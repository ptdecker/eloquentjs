// chessboard.js
//
// Generate a string of ' ' and '#' that creates a chessboard whose dimensions
// are defined 'n' by 'n' and then prints that string to the console.

const n = 8
let board = ""
for (let row = 0; row < n; row++) {
    for (let col = 0; col < n; col++) {
        board += ((row + col) % 2 == 0) ? " " : "#"
    }
    if ((row + 1) < n) board += "\n"
}
console.log(board)