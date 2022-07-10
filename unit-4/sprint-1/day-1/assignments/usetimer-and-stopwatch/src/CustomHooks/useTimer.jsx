import { useState, useRef, useEffect } from 'react'

export const useTimer = (initTime) => {

    const totalTime = 60*(+(initTime[0]+initTime[1])) + 60*(+(initTime[5]+initTime[6])) + (+(initTime[10]+initTime[11]))
    
    const [time, setTime] = useState(totalTime);
    const [isRunning, setIsRunning] = useState(false);
    const [newTime, setNewTime ] = useState(true);
    const timer = useRef();

    const startTimer = ()=>{
        if(newTime === true){
            setTime(totalTime);
        }
        if(isRunning){
            return
        }
        timer.current = setInterval(()=>{
            setTime(prev=> prev- 1);
        }, 1000);
        setIsRunning(true); 
    }

    const stopTimer = ()=>{
        clearInterval(timer.current);
        setIsRunning(false);
        setNewTime(false);
    } 

    const resetTimer = ()=>{
        setTime(totalTime);
        stopTimer();
        setNewTime(true)
    }

    return { time, isRunning, setTime, startTimer, stopTimer, resetTimer };
}
