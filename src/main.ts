import { makeHumanMove, makeAIMove, flipPlayer } from "./utils_game";
import { Board } from "./board";

let board = new Board(Board.generateNewBoard());
let player = 'X';

board.display();

while (!("X O".includes(board.checkResult() || "NO RESULT"))) {
    if (player === 'X') {
        makeHumanMove(board, player);
    } else {
        makeAIMove(board, player);
    }

    player = flipPlayer(player);
    board.display()
}

switch (board.checkResult()) {
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
