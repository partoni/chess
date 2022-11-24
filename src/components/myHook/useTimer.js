import { useEffect, useRef } from "react";


export function useTimer(callback,delay) {
    

    const savedCallback = useRef();
  
    useEffect(() => {
      savedCallback.current = callback;
    });
  
    useEffect(() => {
      function tick() {
        savedCallback.current();
      }
      if(delay){
      let id = setInterval(tick, 1000);
      return () => clearInterval(id);}
    }, [delay]);
  
}