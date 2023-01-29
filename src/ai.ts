import { scores } from "./constants";
import { Board } from "./board";

export function searchForBestMove(board: Board, playerToken: string) {
    let bestScore = -Infinity;
    let bestMove;

    const possibleMoves = board.getPossibleMoves();

    for (let i = 0; i < possibleMoves.length; i++) {
        const move = possibleMoves[i].split('');

        board.makeMove(move, playerToken);

        let score = minimax(board, 0, false);
        board.makeMove(move, ' ');

        if (score > bestScore) {
            bestScore = score;
            bestMove = move;
        }

    }

    return bestMove;
}

function minimax(board: Board, depth: number, isMaximisingPlayer: boolean) {
    const result = board.checkResult();

    if (result) {
        return scores[result];
    }

    if (isMaximisingPlayer) {
        let bestScore = -Infinity;
        const possibleMoves = board.getPossibleMoves();

        for (let i = 0; i < possibleMoves.length; i++) {
            const move = possibleMoves[i].split('');

            board.makeMove(move, 'O');
            let score = minimax(board, depth + 1, false);
            board.makeMove(move, ' ');

            bestScore = Math.max(score, bestScore);
        }

        return bestScore;

    } else {
        let bestScore = Infinity;
        const possibleMoves = board.getPossibleMoves();

        for (let i = 0; i < possibleMoves.length; i++) {
            const move = possibleMoves[i].split('');

            board.makeMove(move, 'X');
            let score = minimax(board, depth + 1, true);
            board.makeMove(move, ' ');
            bestScore = Math.min(score, bestScore);
        }

        return bestScore;
    }
}
