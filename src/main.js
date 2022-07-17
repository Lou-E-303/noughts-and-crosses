import { displayBoard } from "./utils_io.js";
import { isGameOver, makeMove, generateEmptyBoard } from "./utils_game.js";

let board = generateEmptyBoard();
let player = 'X'

while (!isGameOver(board)) {
    displayBoard(board);
    makeMove(board, player);
    player = (player === 'X' ? 'O' : 'X');
}

console.log("Winner!");