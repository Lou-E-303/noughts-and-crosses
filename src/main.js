import { displayBoard } from "./utils_io.js";
import {checkResult, generateEmptyBoard, makeHumanMove, makeAIMove} from "./utils_game.js";

let board = generateEmptyBoard();
let player = 'X'

displayBoard(board);

while (!("X O".includes(checkResult(board)))) {
    if (player === 'X') {
        makeHumanMove(board, player);
    } else {
        makeAIMove(board, player, true);
    }

    player = (player === 'X' ? 'O' : 'X');
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
