import promptSync from 'prompt-sync';
import { searchForBestMove } from "./ai.js";

const prompt = promptSync();

export function generateEmptyBoard() {
    return [[' ', ' ', ' '], [' ', ' ', ' '], [' ', ' ', ' ']];
}

export function isGameOver(board) {

    // Check Rows

    for (let i = 0; i < board.length; i++) {
        if ((new Set([board[i][0], board[i][1], board[i][2]]).size === 1) && board[i][0] !== ' ') {
            return true;
        }
    }

    // Check Columns

    for (let i = 0; i < board.length; i++) {
        if ((new Set([board[0][i], board[1][i], board[2][i]]).size === 1) && board[0][i] !== ' ') {
            return true;
        }
    }

    // Check Diagonals

    if ((new Set([board[0][0], board[1][1], board[2][2]]).size === 1) && board[0][0] !== ' ') {
        return true;
    }

    if ((new Set([board[0][2], board[1][1], board[2][0]]).size === 1) && board[0][2] !== ' ') {
        return true;
    }

    return false;
}

export function findPossibleMoves(board) {
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
    const possibleMoves = findPossibleMoves(board);
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
    let move = searchForBestMove(board, player)
    board[move[1]][move[0]] = player;
}

export function getRandomMove(possibleMoves) {
    let randomMoveIndex = Math.floor(Math.random() * possibleMoves.length);
    return possibleMoves[randomMoveIndex].split('');
}