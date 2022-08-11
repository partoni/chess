import React, { useEffect, useState } from "react";
import style from "./CellComponent.module.css"
export const CellComponent = ({cell,click,collor,selected})=>{
   
    const onSelected = ()=>{
        
        click(cell)
    }
   
    // useEffect(()=>{},[selected])
    return(
        <div className={[style.cell,style[collor],selected===true?style.selected:''].join(" ")} 
             
             onClick={onSelected}>
            {cell.available?<div className={style.marker}></div>:null}
            {cell.figure?<img src={cell.figure.logo} alt=''/>:null}
        </div>
    )
}