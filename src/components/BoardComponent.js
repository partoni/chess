import React from 'react'
import { CellComponent } from './cell/CellComponent'
import "./BoardComponentStyle.css"

export const BoardComponent = ({board,setBoard})=>{
    console.log("---board---"+board);
    return(
        <>
            {board.cell.map((row,index)=> <React.Fragment key={index}>
                {row.map((cell,ind)=>
                    
                    (ind+index)%2
                    ?<div className='white'><CellComponent cell={cell} /></div>
                    :<div className='black'><CellComponent cell={cell} /></div>
                )
                }
                </React.Fragment>)
                }

        </>
    )
}
