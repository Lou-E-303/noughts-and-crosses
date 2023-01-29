export class Board {
    state: string[][];

    constructor(initialState: string[][]) {
        this.state = initialState;
    }

    display() {
        console.log("\n[" + this.state[0] + "]" + "\n" + "[" + this.state[1] + "]" + "\n" + "[" + this.state[2] + "]\n");
    }

    clear() {
        this.state = Board.generateNewBoard();
    }

    makeMove() {
        // TODO - rather than letting the driving code set the state directly
    }

    static generateNewBoard() {
        return [[' ', ' ', ' '], [' ', ' ', ' '], [' ', ' ', ' ']];
    }

    checkResult() {

        // Check Rows

        for (let i = 0; i < this.state.length; i++) {
            const setOfRows = new Set([this.state[i][0], this.state[i][1], this.state[i][2]]);
            const [firstElementOfRowSet] = setOfRows;
            if ((setOfRows.size === 1) && firstElementOfRowSet !== ' ') {
                return firstElementOfRowSet;
            }
        }

        // Check Columns

        for (let i = 0; i < this.state.length; i++) {
            const setOfCols = new Set([this.state[0][i], this.state[1][i], this.state[2][i]]);
            const [firstElementOfColSet] = setOfCols;
            if ((setOfCols.size === 1) && firstElementOfColSet !== ' ') {
                return firstElementOfColSet;
            }
        }

        // Check Diagonals

        const setOfLeftDiags = new Set([this.state[0][0], this.state[1][1], this.state[2][2]]);
        const [firstElementOfLeftDiagSet] = setOfLeftDiags;
        if ((setOfLeftDiags.size === 1) && firstElementOfLeftDiagSet !== ' ') {
            return firstElementOfLeftDiagSet;
        }

        const setOfRightDiags = new Set([this.state[0][2], this.state[1][1], this.state[2][0]]);
        const [firstElementOfRightDiagSet] = setOfRightDiags;
        if ((setOfRightDiags.size === 1) && firstElementOfRightDiagSet !== ' ') {
            return firstElementOfRightDiagSet;
        }

        for (let i = 0; i < this.state.length; i++) {
            for (let j = 0; j < this.state[i].length; j++) {
                if (this.state[i][j] === ' ') {
                    return undefined;
                }
            }
        }

        return ' ';
    }

    getPossibleMoves() {
        const possibleMoveList = [];

        for (let i = 0; i < this.state.length; i++) {
            for (let j = 0; j < this.state[i].length; j++) {
                if (this.state[i][j] === ' ') {
                    possibleMoveList.push(j.toString() + i.toString());
                }
            }
        }

        return possibleMoveList;
    }
}
