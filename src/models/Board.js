import Cell from "./Cell";
import Figure from "./Figure";
import logo from "../logo/black-bishop.png"
class Board{
    cell = [];

    initCells(){
        console.log("-----initCells----");
        for (let i = 0; i < 8; i++) {
            const row = []
            for (let x = 0; x < 8; x++) {
                const newCell = new Cell(i,x,null)
                row.push(newCell)
            }
            this.cell.push(row)
            
        }
    }
    addFigurs(){
        
        this.cell.map(cell=>cell.map(cell1=>cell1.figure=new Figure('bishop',"black",logo)))
    }
}
export default Board