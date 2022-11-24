import { useState } from "react"
import { useTimer } from "../myHook/useTimer"

import style from "./customizeTimer.module.css"
export const CustomTimer= ()=>{

    let [seconds,setSeconds] = useState(0)
    let [minutes,setMinuts] = useState(0)
    let [isRuning,setIsRuning] = useState(false)
    if(seconds===60){
        setSeconds(0)
        setMinuts(minutes+1)
    }
   useTimer(()=>setSeconds(seconds+1),isRuning)

   const countTime = ()=>{
    setIsRuning(!isRuning)
   }
    // const countTime = ()=>{
        
        
    //     if(isCount){
    //         console.log("isCount ----true");
    //         setIsCount(false)
            
    //         return
    //     }else{
    //         console.log("isCount ----false");
    //         isInterval = setInterval(()=>{
    //         console.log(seconds);
    //         setSeconds(prevState=>prevState+1)
    //         setIsCount(true)}            
    //         ,1000)
    //         console.log(isInterval)
    //     }
    // }

    return(
        <>
            
            <span>{minutes<10?"0"+minutes:minutes}</span><span>:</span><span>{seconds<10?"0"+seconds:seconds}</span>
            <div className={style.myButton} onClick={countTime}>
                {isRuning?<span>stop</span>:<span>start</span>}
            </div>
        </>
    )
}