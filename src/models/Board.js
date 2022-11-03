
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
    isEmptyVertical(cell){
        console.log('---isEmptyVertical down---'+JSON.stringify(cell.figure) )
        
        for(let x=cell.x+1;x<=7;x++){
           console.log('this.cells----'+JSON.stringify(this.cells[x][cell.y]));
           console.log('cell---'+JSON.stringify(cell.figure));
            if(!this.cells[x][cell.y].figure){
                this.cells[x][cell.y].available=true
            
            }else if(this.cells[x][cell.y].figure.collor!==cell.figure.collor){
                console.log(this.cells[x][cell.y].figure)
                this.cells[x][cell.y].available=true
                break;
            }else if(this.cells[x][cell.y].figure.collor===cell.figure.collor){
                break;
            }
            
        }
        for(let x=cell.x-1;x>=0;x--){
            console.log('---isEmptyVertical up---'+JSON.stringify(cell.figure) )
            console.log(this.cells[x][cell.y])
            console.log(`${this.cells[x][cell.y].figure}---${cell.figure.collor}`);

            if(!this.cells[x][cell.y].figure){
                this.cells[x][cell.y].available=true
            
            }else if(this.cells[x][cell.y].figure.collor!==cell.figure.collor){
                console.log(this.cells[x][cell.y].figure)
                this.cells[x][cell.y].available=true
                return
            }else if(this.cells[x][cell.y].figure.collor===cell.figure.collor){
                return
            }
            
        }
    }

    isEmptyGorisontal(cell){
        console.log('---isEmptyGorisontal')

        for(let y=cell.y+1;y<=7;y++){
          
            if(!this.cells[cell.x][y].figure){
                this.cells[cell.x][y].available=true
            

            }else if(this.cells[cell.x][y].figure.collor!==cell.figure.collor){
                this.cells[cell.x][y].available=true
                break
            }else if(this.cells[cell.x][y].figure.collor===cell.figure.collor){
                break
            }
        }
        for(let y=cell.y-1;y>=0;y--){
            console.log('---isEmptyGorisontal---'+this.cells[cell.x][y].figure)
            if(!this.cells[cell.x][y].figure){
                this.cells[cell.x][y].available=true
            
            }else if(this.cells[cell.x][y].figure.collor!==cell.figure.collor){
                this.cells[cell.x][y].available=true
                break
            }else if(this.cells[cell.x][y].figure.collor===cell.figure.collor){
                break
            }
            
        }
        
    }

    isEmptyDiagonal(cell){

    }

    highlightCells(cell) {
        console.log('---highlightCells---');
        switch (cell.figure.name) {
            case "pawn":

                break;

            case "knight":

                break;

            case "king":

                break;

            case "bishop":

                break;

            case "queen":

                break;

            case "rook":
                console.log('---rook---');
                this.isEmptyVertical(cell)
                this.isEmptyGorisontal(cell)
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
        this.cells[defensingCell.x][defensingCell.y].removeFigure()
        this.cells[defensingCell.x][defensingCell.y].addFigure(attackingCell.figure)
        this.cells[attackingCell.x][attackingCell.y].removeFigure()

        // this.cells.map((row,ind)=>row.map((cell,index)=>
        // if(row.x=cell)))
    }
    availableCells(cell) {


    }
}
export default Board