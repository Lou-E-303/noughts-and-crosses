import { displayBoard } from "./utils_io.js";
import { isGameOver, makeMove, generateEmptyBoard } from "./utils_game.js";

let board = generateEmptyBoard();
let player = 'X'
displayBoard(board);

while (!isGameOver(board)) {
    makeMove(board, player);
    player = (player === 'X' ? 'O' : 'X');
    displayBoard(board);
}

console.log("Winner!\n");