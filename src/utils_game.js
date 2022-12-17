import promptSync from 'prompt-sync';
import { searchForBestMove } from "./ai.js";

const prompt = promptSync();

export function generateEmptyBoard() {
    return [[' ', ' ', ' '], [' ', ' ', ' '], [' ', ' ', ' ']];
}

export function checkResult(board) {

    // Check Rows

    for (let i = 0; i < board.length; i++) {
        const setOfRows = new Set([board[i][0], board[i][1], board[i][2]]);
        const [firstElementOfRowSet] = setOfRows;
        if ((setOfRows.size === 1) && firstElementOfRowSet !== ' ') {
            return firstElementOfRowSet;
        }
    }

    // Check Columns

    for (let i = 0; i < board.length; i++) {
        const setOfCols = new Set([board[0][i], board[1][i], board[2][i]]);
        const [firstElementOfColSet] = setOfCols;
        if ((setOfCols.size === 1) && firstElementOfColSet !== ' ') {
            return firstElementOfColSet;
        }
    }

    // Check Diagonals

    const setOfLeftDiags = new Set([board[0][0], board[1][1], board[2][2]]);
    const [firstElementOfLeftDiagSet] = setOfLeftDiags;
    if ((setOfLeftDiags.size === 1) && firstElementOfLeftDiagSet !== ' ') {
        return firstElementOfLeftDiagSet;
    }

    const setOfRightDiags = new Set([board[0][2], board[1][1], board[2][0]]);
    const [firstElementOfRightDiagSet] = setOfRightDiags;
    if ((setOfRightDiags.size === 1) && firstElementOfRightDiagSet !== ' ') {
        return firstElementOfRightDiagSet;
    }

    for (let i = 0; i < board.length; i++) {
        for (let j = 0; j < board[i].length; j++) {
            if (board[i][j] === ' ') {
                return false;
            }
        }
    }

    return ' ';
}

export function getPossibleMoves(board) {
    const possibleMoveList = [];

    for (let i = 0; i < board.length; i++) {
        for (let j = 0; j < board[i].length; j++) {
            if (board[i][j] === ' ') {
                possibleMoveList.push(j.toString() + i.toString());
            }
        }
    }

    return possibleMoveList;
}

export function makeHumanMove(board, player) {
    const possibleMoves = getPossibleMoves(board);
    let move;

    do {
        move = prompt("Please enter a move in the format CR where C is column and R is row: ");

        if (possibleMoves.indexOf(move) === -1) {
            console.log("\nInvalid move! Please try again.\n")
        }
    } while (possibleMoves.indexOf(move) === -1);

    move = move.split('');

    board[parseInt(move[1])][parseInt(move[0])] = player;
}

export function makeAIMove(board, player) {
    let move = searchForBestMove(board, player);
    
    if (!move) {
        console.warn("No best move found - making random move.");
        move = getRandomMove(getPossibleMoves(board));
    }
    board[move[1]][move[0]] = player;
}

export function getRandomMove(possibleMoves) {
    if (possibleMoves.length > 0) {
        let randomMoveIndex = Math.floor(Math.random() * possibleMoves.length);
        return possibleMoves[randomMoveIndex].split('');
    }
}
