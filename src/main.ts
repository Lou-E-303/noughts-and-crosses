import { displayBoard } from "./utils_io";
import {checkResult, generateEmptyBoard, makeHumanMove, makeAIMove, flipPlayer} from "./utils_game.js";

let board = generateEmptyBoard();
let player = 'X';

displayBoard(board);

while (!("X O".includes(checkResult(board) || "NO RESULT"))) {
    if (player === 'X') {
        makeHumanMove(board, player);
    } else {
        makeAIMove(board, player);
    }

    player = flipPlayer(player);
    displayBoard(board);
}

switch (checkResult(board)) {
    case 'X':
        console.log(`Winner: X!`);
        break;
    case 'O':
        console.log(`Winner: O!`);
        break;
    case ' ':
        console.log(`Draw!`);
        break;
}
