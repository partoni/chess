import React, { useEffect, useState } from 'react'
import { CellComponent } from '../cell/CellComponent'
import "./BoardComponentStyle.css"

export const BoardComponent = ({ board, setBoard, restart }) => {
    console.log("BoardComponent");
    const [selected, setSelected] = useState(null)
    
    console.log("---board---");
    const click = (cell) => {
        console.log("---click-----");
        if (selected && cell.x === selected.x && cell.y === selected.y) {
            setSelected(null)
            board.deleteHighLight()

        } else {
            console.log(cell.x+"---"+selected?.x+" || "+cell.y+ "----" +selected?.y);
            if (cell.x !== selected?.x || cell.y !== selected?.y) {
                setSelected(null)
                board.deleteHighLight()
            }
            setSelected(cell)
            board.highlightCells(cell)
        }
        const newBoard = board.getCopyBoard()
        setBoard(newBoard)
    }
    const movement = (defensingCell) => {

        board.figureReplacement(selected, defensingCell)
        setSelected(null)
        board.deleteHighLight()
        const newBoard = board.getCopyBoard()
        console.log('=====defensingCell----')

        setBoard(newBoard)
    }
    const boardHighlight = (cell) => {
        if (selected && cell.x === selected.x && cell.y === selected.y) {
            board.highlightCells(cell)

        } else if (!selected) {
            setSelected(cell)
        }
        const newBoard = board.getCopyBoard()
        setBoard(newBoard)
    }



    return (
        <>

        <div className='board'>
            {board.cells.map((row, index) => <React.Fragment key={index}>
                {row.map((cell, ind) =>
                    (ind + index) % 2
                        ? <CellComponent
                            key={cell.id}
                            collor="white"
                            cell={cell}
                            click={click}
                            movement={movement}
                            onBoardHighlight={boardHighlight}
                            selected={selected?.x === cell.x && selected?.y === cell.y} />
                        : <CellComponent
                            key={cell.id}
                            collor="black"
                            cell={cell}
                            click={click}
                            onBoardHighlight={boardHighlight}
                            movement={movement}
                            selected={selected?.x === cell.x && selected?.y === cell.y} />
                )
                }
            </React.Fragment>)
            }
           
        </div>
        <div><button onClick={()=>restart()}>????????????????????</button></div>
        </>
    )
}
