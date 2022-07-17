import promptSync from 'prompt-sync';

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

    if ((new Set([board[0][2], board[1][1], board[0][2]]).size === 1) && board[0][2] !== ' ') {
        return true;
    }

    return false;
}

export function makeMove(board, player) {
    if (player === 'X') {
        const move = prompt("Please enter a move in the format CR where C is column and R is row: ").split('');
        board[parseInt(move[1])][parseInt(move[0])] = player;
    } else {
        makeRandomMove(board, player);
    }
}

function makeRandomMove(board, player) {
    let randomColumnIndex;
    let randomRowIndex;

    do {
        randomColumnIndex = Math.floor(Math.random() * 3);
        randomRowIndex = Math.floor(Math.random() * 3);
    } while (board[randomRowIndex][randomColumnIndex] !== ' ') {
        board[randomRowIndex][randomColumnIndex] = player;
    }
}