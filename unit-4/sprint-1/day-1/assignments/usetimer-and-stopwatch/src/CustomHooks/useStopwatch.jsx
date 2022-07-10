import React, { useRef, useState } from 'react'

export const useStopwatch = (lapTime) => {

    const [time, setTime] = useState(0);
    const [isRunning, setIsRunning] = useState(false);
    const timer = useRef();

    const startTimer = ()=>{
        if(isRunning){
            return
        }
        timer.current = setInterval(()=>{
            setTime(prev=> prev+1);
        }, 1000);
        setIsRunning(true); 
    }

    const stopTimer = ()=>{
        clearInterval(timer.current);
        setIsRunning(false);
    }

    const resetTimer = ()=>{
        setTime(0);
        stopTimer();
    }
    
    return { time, isRunning, startTimer, stopTimer, resetTimer }
}
