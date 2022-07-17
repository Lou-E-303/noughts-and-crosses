import { findPossibleMoves, getRandomMove, isGameOver } from "./utils_game.js";

export function searchForBestMove(board, player) {
    let trialBoard = JSON.parse(JSON.stringify(board));
    const possibleMoves = findPossibleMoves(trialBoard);

    for (let i = 0; i < possibleMoves.length; i++) {
        let move = possibleMoves[i].split('');
        trialBoard[move[1]][move[0]] = player;
        if (isGameOver(trialBoard)) {
            return move;
        }
        trialBoard = JSON.parse(JSON.stringify(board));
    }

    return getRandomMove(possibleMoves);
}