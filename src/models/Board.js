
import Cell from "./Cell";
import Figure from "./Figure";
import logoBishopBlack from "../logo/black-bishop.png";
import logoRookBlack from "../logo/black-rook.png";
import logoKnightBlack from "../logo/black-knight.png";
import logoKingBlack from "../logo/black-king.png";
import logoPawnBlack from "../logo/black-pawn.png";
import logoQueenBlack from "../logo/black-queen.png";
import logoBishopWhite from "../logo/white-bishop.png";
import logoRookWhite from "../logo/white-rook.png";
import logoKnightWhite from "../logo/white-knight.png";
import logoKingWhite from "../logo/white-king.png";
import logoPawnWhite from "../logo/white-pawn.png";
import logoQueenWhite from "../logo/white-queen.png";


class Board {
    cells = [];

    initCells() {
        console.log("-----initCells----");
        for (let i = 0; i < 8; i++) {
            const row = []
            for (let x = 0; x < 8; x++) {
                const newCell = new Cell(i, x, null, `${i}${x}`)
                row.push(newCell)
            }
            this.cells.push(row)

        }
    }
    addFigurs() {
        console.log('------addfig-----');
        for (let i = 0; i < this.cells.length; i++) {
            let row = this.cells[i]
            if (i === 0) {

                for (let y = 0; y < row.length; y++) {

                    if (y === 0 || y === 7) { this.cells[i][y].figure = new Figure("rook", "black", logoRookBlack) }
                    else if (y === 1 || y === 6) { this.cells[i][y].figure = new Figure("knight", "black", logoKnightBlack) }
                    else if (y === 2 || y === 5) { this.cells[i][y].figure = new Figure("bishop", "black", logoBishopBlack) }
                    else if (y === 3) { this.cells[i][y].figure = new Figure("queen", "black", logoQueenBlack) }
                    else if (y === 4) { this.cells[i][y].figure = new Figure("king", "black", logoKingBlack) }
                }
            }
            else if (i === 1) {
                this.cells[i].map(cell => cell.figure = new Figure("pawn", "black", logoPawnBlack))

            }
            else if (i === 7) {
                for (let y = 0; y < row.length; y++) {
                    if (y === 0 || y === 7) { this.cells[i][y].figure = new Figure("rook", "white", logoRookWhite) }
                    else if (y === 1 || y === 6) { this.cells[i][y].figure = new Figure("knight", "white", logoKnightWhite) }
                    else if (y === 2 || y === 5) { this.cells[i][y].figure = new Figure("bishop", "white", logoBishopWhite) }
                    else if (y === 3) { this.cells[i][y].figure = new Figure("queen", "white", logoQueenWhite) }
                    else if (y === 4) { this.cells[i][y].figure = new Figure("king", "white", logoKingWhite) }
                }
            }
            else if (i === 6) {
                this.cells[i].map(cell => cell.figure = new Figure("pawn", "white", logoPawnWhite))

            }
        }
        // this.cells.map(cell=>cell.map(cell1=>cell1.figure=new Figure('bishop',"black",logo)))
    }
    getCopyBoard() {
        const newBoard = new Board()
        newBoard.cells = this.cells
        return newBoard
    }
    isEmptyVerticalDown(cell, z) {
        console.log('---isEmptyVertical down---')
        let limit = 0
        for (let x = cell.x + 1; x <= 7; x++) {

            if (limit === z) break

            if (!this.cells[x][cell.y].figure) {
                this.cells[x][cell.y].available = true

            } else if (this.cells[x][cell.y].figure.collor !== cell.figure.collor) {
                console.log(this.cells[x][cell.y].figure)
                this.cells[x][cell.y].available = true
                break;
            } else if (this.cells[x][cell.y].figure.collor === cell.figure.collor) {
                break;
            }
            ++limit
        }
    }

    isEmptyVerticalUp(cell, z) {
        let limit = 0
        for (let x = cell.x - 1; x >= 0; x--) {
            console.log('---isEmptyVertical up---')

            if (limit === z) break
            if (!this.cells[x][cell.y].figure) {

                this.cells[x][cell.y].available = true

            } else if (this.cells[x][cell.y].figure.collor !== cell.figure.collor) {
                console.log(this.cells[x][cell.y].figure)
                if (cell.figure.name === "pawn") break
                this.cells[x][cell.y].available = true
                return
            } else if (this.cells[x][cell.y].figure.collor === cell.figure.collor) {
                return
            }
            ++limit
        }
    }

    isEmptyGorisontal(cell, z) {
        console.log('---isEmptyGorisontal')
        let limit = 0
        for (let y = cell.y + 1; y <= 7; y++) {

            if (limit === z) break
            if (!this.cells[cell.x][y].figure) {
                this.cells[cell.x][y].available = true


            } else if (this.cells[cell.x][y].figure.collor !== cell.figure.collor) {
                this.cells[cell.x][y].available = true
                break
            } else if (this.cells[cell.x][y].figure.collor === cell.figure.collor) {
                break
            }
            ++limit
        }
        limit = 0
        for (let y = cell.y - 1; y >= 0; y--) {
            console.log('---isEmptyGorisontal---')

            if (limit === z) break
            if (!this.cells[cell.x][y].figure) {
                this.cells[cell.x][y].available = true

            } else if (this.cells[cell.x][y].figure.collor !== cell.figure.collor) {
                this.cells[cell.x][y].available = true
                break
            } else if (this.cells[cell.x][y].figure.collor === cell.figure.collor) {
                break
            }
            ++limit
        }

    }
    checkDiagonalCells(x, y, cell) {
        if (!this.cells[x][y].figure) {
            if (cell.figure.name === "pawn") return false
            this.cells[x][y].available = true

        } else if (this.cells[x][y].figure.collor !== cell.figure.collor) {
            console.log(this.cells[x][y].figure)
            this.cells[x][y].available = true
            return false
        } else if (this.cells[x][y].figure.collor === cell.figure.collor) {
            return false
        }
        return true
    }

    isEmptyDiagonalDown(cell, z) {
        let limit = 0
        let y = cell.y
        for (let x = cell.x + 1; x <= 7; x++) {
            ++y

            if (limit === z) break
            if (y > 7 || !this.checkDiagonalCells(x, y, cell) || limit === z) {
                break;
            }
            ++limit
        }
        limit = 0
        y = cell.y
        console.log(y);
        for (let x = cell.x + 1; x <= 7; x++) {
            --y

            if (limit === z) break
            console.log('---isEmptyDiagonal  -x+1- ', x, y);
            if (y < 0 || !this.checkDiagonalCells(x, y, cell) || limit === z) {
                break;
            }
            ++limit
        }

    }
    isEmptyDiagonalUp(cell, z) {
        let y = cell.y
        let limit = 0
        for (let x = cell.x - 1; x >= 0; x--) {
            ++y

            if (limit === z) break
            if (y > 7 || !this.checkDiagonalCells(x, y, cell) || limit === z) {

                break;
            }
            ++limit
        }

        y = cell.y
        limit = 0
        for (let x = cell.x - 1; x >= 0; x--) {
            --y

            if (limit === z) break
            console.log('---isEmptyDiagonal  -x-1- ', x, y);
            if (y < 0 || !this.checkDiagonalCells(x, y, cell) || limit === z) {
                break;
            }
            ++limit
        }
    }
    movementKnight(cell) {

        // let coordinates=[]
        console.log("--movementKnight--");
        console.log("cell.x=" + cell.x + "---------cell.y=" + cell.y);
        for (let x = cell.x - 2; x <= cell.x + 2 ; x++) {
            console.log(x);

            if (x === cell.x - 2 || x === cell.x + 2) {
                console.log("(x===cell.x-2||x===cell.x+2)");
                this.cells[x]?.map((oldCell) => {
                   if((oldCell.y === cell.y + 1 || oldCell.y === cell.y - 1)&&oldCell.figure?.collor!==cell.figure.collor)  oldCell.available = true
                    return oldCell
                }
                )

            }
            if (x === cell.x - 1 || x === cell.x + 1) {
                this.cells[x]?.map((oldCell) => {
                    if((oldCell.y === cell.y + 2 || oldCell.y === cell.y - 2)&&oldCell.figure?.collor!==cell.figure.collor)  oldCell.available = true
                     return oldCell
                 }
                 )
            }

        }
        // for(let x=cell.x-2;x<=cell.x+2;x++){
        //     console.log("for------------");
        //     if(x=cell.x)continue
        // if(x===cell.x-2||x===cell.x+2){
        //     this.cells[x].map((oldCell)=>oldCell.y===(cell.y+1||cell.y-1)?oldCell.available=true:oldCell)
        // }
        // this.cells[x].map((oldCell)=>oldCell.y===(cell.y+2||cell.y-2)?oldCell.available=true:oldCell)
        // }
    }

    highlightCells(cell) {
        console.log('---highlightCells---');
        switch (cell.figure.name) {
            case "pawn":
                if (cell.figure.begin === true) {
                    this.isEmptyVerticalUp(cell, 2)

                }
                this.isEmptyVerticalUp(cell, 1)
                this.isEmptyDiagonalUp(cell, 1)

            case "knight":

                this.movementKnight(cell)
                break;

            case "king":
                this.isEmptyVerticalUp(cell, 1)
                this.isEmptyVerticalUDown(cell, 1)
                this.isEmptyGorisontal(cell, 1)
                this.isEmptyDiagonalUp(cell, 1)
                this.isEmptyDiagonalDown(cell, 1)

                break;

            case "bishop":
                this.isEmptyDiagonalUp(cell)
                this.isEmptyDiagonalDown(cell)
                break;

            case "queen":
                this.isEmptyVerticalUp(cell)
                this.isEmptyVerticalDown(cell)
                this.isEmptyGorisontal(cell)
                this.isEmptyDiagonalUp(cell)
                this.isEmptyDiagonalDown(cell)

                break;

            case "rook":
                console.log('---rook---');
                this.isEmptyVerticalUp(cell)
                this.isEmptyGorisontalDown(cell)
            // this.cells = this.cells.map((row) => row.map(oldCell => {
            //     // oldCell.x===cell.x&&oldCell.y===cell.y?oldCell.available=true:false
            //     if (oldCell.x === cell.x || oldCell.y === cell.y) {
            //         oldCell.available = oldCell.figure ? false : true
            //     }
            //     return oldCell
            // }
            // ))

            default:
                break;

        }
    }
    deleteHighLight() {
        this.cells = this.cells.map((row) => row.map(oldCell => {
            oldCell.available = false
            return oldCell
        }
        ))
    }
    figureReplacement(attackingCell, defensingCell) {
        console.log("---figureReplacement---")
        if (this.cells[defensingCell.x][defensingCell.y].available) {
            this.cells[defensingCell.x][defensingCell.y].removeFigure()
            this.cells[defensingCell.x][defensingCell.y].addFigure(attackingCell.figure)
            this.cells[attackingCell.x][attackingCell.y].removeFigure()
        }
    }
    availableCells(cell) {


    }
}
export default Board