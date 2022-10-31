import React, {useState}from 'react'
import { CellComponent } from './cell/CellComponent'
import "./BoardComponentStyle.css"

export const BoardComponent = ({board,setBoard})=>{
    const [selected,setSelected] = useState(null)
    console.log("---board---" );
    const click = (cell)=>{
        console.log("---click-----");
        if(selected&&cell.x===selected.x&&cell.y===selected.y){
            setSelected(null)
            board.deleteHighLight()
        
        }else{
            setSelected(cell)
            board.highlightCells(cell)
        }
        const newBoard = board.getCopyBoard()
        setBoard(newBoard)
    }
    const movement=(defensingCell)=>{
        click(selected)
       board.figureReplacement(selected,defensingCell)
       const newBoard = board.getCopyBoard()
       console.log('=====defensingCell----')
        setBoard(newBoard)
    }

    return(
        <>
            {board.cell.map((row,index)=> <React.Fragment key={index}>
                {row.map((cell,ind)=>                    
                    (ind+index)%2
                    ?<CellComponent 
                        key={cell.id} 
                        collor="white" 
                        cell={cell} 
                        click={click}
                        movement={movement} 
                        selected={selected?.x===cell.x&&selected?.y===cell.y}/>
                    :<CellComponent
                        key={cell.id}
                        collor="black"
                        cell={cell} 
                        click={click}
                        movement={movement}
                        selected={selected?.x===cell.x&&selected?.y===cell.y}/>
                )
                }
                </React.Fragment>)
                }

        </>
    )
}
