import { displayBoard } from "./utils_io.js";
import {isGameOver, generateEmptyBoard, makeHumanMove, makeAIMove} from "./utils_game.js";

let board = generateEmptyBoard();
let player = 'X'
displayBoard(board);

while (!isGameOver(board)) {
    if (player === 'X') {
        makeHumanMove(board, player);
    } else {
        makeAIMove(board, player);
    }

    player = (player === 'X' ? 'O' : 'X');
    displayBoard(board);
}

console.log("Winner!\n");