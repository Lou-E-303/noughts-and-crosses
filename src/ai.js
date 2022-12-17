import { getPossibleMoves, checkResult } from "./utils_game.js";

export function searchForBestMove(board, playerToken) {
    let trialBoard = resetTrialBoard(board);
    const possibleMoves = getPossibleMoves(trialBoard);

    for (let i = 0; i < possibleMoves.length; i++) {

        const move = possibleMoves[i].split('');
        trialBoard[move[1]][move[0]] = playerToken;

        if (playerToken.includes(checkResult(trialBoard))) {
            return move;
        }

        trialBoard = resetTrialBoard(board);
    }
}

function resetTrialBoard(board) {
    return JSON.parse(JSON.stringify(board));
}
