import { getPossibleMoves, flipPlayerToken, getRandomMove, checkResult } from "./utils_game.js";

// Could implement strategy pattern for various search strategies
// e.g. DFS, BFS, MiniMax, NegaMax, Alpha-Beta
// Could add some code to benchmark these strategies

export function searchForBestMove(board, playerToken, isAiTurn) {
    let trialBoard = resetTrialBoard(board);
    const possibleMoves = getPossibleMoves(trialBoard);

    for (let i = 0; i < possibleMoves.length; i++) {
        let move = possibleMoves[i].split('');
        trialBoard[move[1]][move[0]] = playerToken;
        if ("X O".includes(checkResult(trialBoard))) {
            return move;
        }
        trialBoard = resetTrialBoard(board);
    }
}

function resetTrialBoard(board) {
    return JSON.parse(JSON.stringify(board));
}
