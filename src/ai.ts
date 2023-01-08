import { getPossibleMoves, checkResult } from "./utils_game";
import { scores } from "./constants";

export function searchForBestMove(board: string[][], playerToken: string) {
    let bestScore = -Infinity;
    let bestMove;

    const possibleMoves = getPossibleMoves(board);

    for (let i = 0; i < possibleMoves.length; i++) {
        const move = possibleMoves[i].split('');

        board[move[1]][move[0]] = playerToken;
        let score = minimax(board, 0, false);
        board[move[1]][move[0]] = ' ';

        if (score > bestScore) {
            bestScore = score;
            bestMove = move;
        }

    }

    return bestMove;
}

function minimax(board: string[][], depth: number, isMaximisingPlayer: boolean) {
    const result = checkResult(board);

    if (result) {
        return scores[result];
    }

    if (isMaximisingPlayer) {
        let bestScore = -Infinity;
        const possibleMoves = getPossibleMoves(board);

        for (let i = 0; i < possibleMoves.length; i++) {
            const move = possibleMoves[i].split('');

            board[move[1]][move[0]] = 'O';
            let score = minimax(board, depth + 1, false);
            board[move[1]][move[0]] = ' ';

            bestScore = Math.max(score, bestScore);
        }

        return bestScore;

    } else {
        let bestScore = Infinity;
        const possibleMoves = getPossibleMoves(board);

        for (let i = 0; i < possibleMoves.length; i++) {
            const move = possibleMoves[i].split('');

            board[move[1]][move[0]] = 'X';
            let score = minimax(board, depth + 1, true);
            board[move[1]][move[0]] = ' ';
            bestScore = Math.min(score, bestScore);
        }

        return bestScore;
    }
}
