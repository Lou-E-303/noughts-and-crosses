import promptSync from 'prompt-sync';
import { searchForBestMove } from "./ai";
import { Board } from "./board";

const prompt = promptSync();

export function makeHumanMove(board: Board, playerToken: string) {
    const possibleMoves = board.getPossibleMoves();
    let move;

    do {
        move = convertDecimalMoveToCartesian(prompt("Please enter a move as a number 1-9 where 1 is the top-left and 9 is the bottom-right of the board: ")) || "";

        if (possibleMoves.indexOf(move) === -1) {
            console.log("\nInvalid move! Please try again.\n");
        }
    } while (possibleMoves.indexOf(move) === -1);

    move = move.split('');

    board.state[parseInt(move[1])][parseInt(move[0])] = playerToken;
}

export function makeAIMove(board: Board, playerToken: string) {
    let move = searchForBestMove(board, playerToken);
    
    if (!move) {
        console.warn("No move found - making random move.");
        move = getRandomMove(board.getPossibleMoves());
    }

    if (move) {
        board.state[move[1]][move[0]] = playerToken;
    } else {
        return
    }
}

export function getRandomMove(possibleMoves: string[]) {
    if (possibleMoves.length > 0) {
        let randomMoveIndex = Math.floor(Math.random() * possibleMoves.length);
        return possibleMoves[randomMoveIndex].split('');
    }
}

export function flipPlayer(playerToken: string) {
    return (playerToken === 'X' ? 'O' : 'X');
}

export function convertDecimalMoveToCartesian(decimalMove: string) {
    switch (decimalMove) {
        case "1":
            return "00";
        case "2":
            return "10";
        case "3":
            return "20";
        case "4":
            return "01";
        case "5":
            return "11";
        case "6":
            return "21";
        case "7":
            return "02";
        case "8":
            return "12";
        case "9":
            return "22";
    }
}

