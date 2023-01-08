export function displayBoard(board: string[][]) {
    console.log("\n[" + board[0] + "]" + "\n" + "[" + board[1] + "]" + "\n" + "[" + board[2] + "]\n");
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
