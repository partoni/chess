import React, { useEffect, useState } from "react";
import style from "./CellComponent.module.css"
export const CellComponent = ({cell,click,collor,selected,movement})=>{
   
    const onSelected = ()=>{
        
        click(cell)
    }
    function dragStartHandler(e,cell){
        console.log("start");
        click(cell)
    }
    function dragLeaveHandler(e){
        console.log("leave");
    }
    function dragEndHandler(e){
        console.log("end");
    }
    function dragOverHandler(e){
        e.preventDefault()
        console.log("over");
    }
    function dropHandler(e,cell){
        console.log("drop")
        
        movement(cell)
        // e.preventDefault()
    }
    // useEffect(()=>{},[selected])
    return(
        <div 
            className={[style.cell,style[collor],selected===true?style.selected:''].join(" ")} 
            onDragStart={(e)=>dragStartHandler(e,cell)}
            onDragLeave={(e)=>dragLeaveHandler(e)}
            onDragOver={(e)=>dragOverHandler(e)}
            onDragEnd={(e)=>dragEndHandler(e)}
            onDrop={(e)=>dropHandler(e,cell)}
            draggable={true}
            onDoubleClick={onSelected}>
            {cell.available?<div className={style.marker}></div>:null}
            {cell.figure
            ?<img src={cell.figure.logo} 
                  alt='' 
                //   onDragStart={(e)=>dragStartHandler(e)}
                //   onDragLeave={(e)=>dragLeaveHandler(e)}
                //   onDragOver={(e)=>dragOverHandler(e)}
                //   onDragEnd={(e)=>dragEndHandler(e)}
                //   onDrop={(e)=>dropHandler(e)}
                //   draggable={true}
                  />
            :null}
        </div>
    )
}