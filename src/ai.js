import {getPossibleMoves, checkResult} from "./utils_game.js";

export function searchForBestMove(board, playerToken) {
    let bestScore = -Infinity;
    let bestMove;

    const possibleMoves = getPossibleMoves(board);

    // let moveScorePairs = {};

    for (let i = 0; i < possibleMoves.length; i++) {
        const move = possibleMoves[i].split('');
        board[move[1]][move[0]] = playerToken; // Make the move
        let score = minimax(board, false);     // Call the minimax algorithm
        board[move[1]][move[0]] = ' ';         // Unmake the move

        // moveScorePairs[move] = score;

        if (score > bestScore) {
            bestScore = score;
            bestMove = move;
        }

    }

    // console.log(`Moves Considered: ${JSON.stringify(moveScorePairs).split(",")}`);
    // console.log(`WINNING MOVE: ${bestMove}  SCORE: ${bestScore}`);

    return bestMove;
}

function minimax(board, isMaximisingPlayer) {
    const result = checkResult(board);

    if (result) {
        return scores[result];
    }

    if (isMaximisingPlayer) {
        let bestScore = -Infinity;
        const possibleMoves = getPossibleMoves(board);

        for (let i = 0; i < possibleMoves.length; i++) {
            const move = possibleMoves[i].split('');
            board[move[1]][move[0]] = 'O';     // Make the move
            let score = minimax(board, false); // Call the minimax algorithm
            board[move[1]][move[0]] = ' ';     // Unmake the move
            bestScore = Math.max(score, bestScore);
        }

        return bestScore;

    } else {
        let bestScore = Infinity;
        const possibleMoves = getPossibleMoves(board);

        for (let i = 0; i < possibleMoves.length; i++) {
            const move = possibleMoves[i].split('');
            board[move[1]][move[0]] = 'X';    // Make the move
            let score = minimax(board, true); // Call the minimax algorithm
            board[move[1]][move[0]] = ' ';    // Unmake the move
            bestScore = Math.min(score, bestScore);
        }

        return bestScore;
    }
}

const scores = {
    "X": -1,
    "O": 1,
    " ": 0
};
