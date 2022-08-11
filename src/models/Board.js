
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


class Board{
    cell = [];

    initCells(){
        console.log("-----initCells----");
        for (let i = 0; i < 8; i++) {
            const row = []
            for (let x = 0; x < 8; x++) {
                const newCell = new Cell(i,x,null,`${i}${x}`)
                row.push(newCell)
            }
            this.cell.push(row)
            
        }
    }
    addFigurs(){
        console.log('------addfig-----');
        for(let i=0; i<this.cell.length;i++){
            let row = this.cell[i]
            if(i===0){
                console.log('i=0'+JSON.stringify(this.cell[0][2]));
                for(let y=0;y<row.length;y++){
                    
                    if(y===0||y===7){this.cell[i][y].figure = new Figure("rook","black",logoRookBlack)}
                    else if(y===1||y===6){this.cell[i][y].figure = new Figure("knight","black",logoKnightBlack)}
                    else if(y===2||y===5){this.cell[i][y].figure = new Figure("bishop","black",logoBishopBlack)}
                    else if(y===3){this.cell[i][y].figure = new Figure("queen","black",logoQueenBlack)}                    
                    else if(y===4){this.cell[i][y].figure = new Figure("king","black",logoKingBlack)}                    
                }
            }
            else if(i===1){
                this.cell[i].map(cell=>cell.figure=new Figure("pawn","black",logoPawnBlack))
                
            }
            else if(i===7){
                for(let y=0;y<row.length;y++){
                    if(y===0||y===7){this.cell[i][y].figure = new Figure("rook","white",logoRookWhite)}
                    else if(y===1||y===6){this.cell[i][y].figure = new Figure("knight","white",logoKnightWhite)}
                    else if(y===2||y===5){this.cell[i][y].figure = new Figure("bishop","white",logoBishopWhite)}
                    else if(y===3){this.cell[i][y].figure = new Figure("queen","white",logoQueenWhite)}                    
                    else if(y===4){this.cell[i][y].figure = new Figure("king","white",logoKingWhite)} 
                }
            }
            else if(i===6){
                this.cell[i].map(cell=>cell.figure=new Figure("pawn","white",logoPawnWhite))
               
            }
        }
        // this.cell.map(cell=>cell.map(cell1=>cell1.figure=new Figure('bishop',"black",logo)))
    }
    getCopyBoard(){
        const newBoard = new Board()
        newBoard.cell = this.cell
        return newBoard
    }

    highlightCells(cell){
        console.log('---highlightCells---'+cell.figure.name);
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
                console.log(this.cell);
                this.cell = this.cell.map((row)=>row.map(oldCell=>{
                    // oldCell.x===cell.x&&oldCell.y===cell.y?oldCell.available=true:false
                    if(oldCell.x===cell.x||oldCell.y===cell.y){
                        oldCell.available=true
                    }
                       return oldCell}
                    ))
                console.log(this.cell);
            default:
                    break;
           
    }}
    deleteHighLight(){
        this.cell = this.cell.map((row)=>row.map(oldCell=>{
            oldCell.available=false
            return oldCell}
            ))
    }
}
export default Board