import React, { useEffect, useState } from 'react';
import { useTimer } from '../CustomHooks/useTimer';
import { getTimeInString } from './getTimeInString';

export const Timer = ({ hidden }) => {

    const [ addTime, setAddTime ] = useState("00 : 05 : 00");
    const [ showInp, setShowInp ] = useState(false);

    const { time, setTime, isRunning, startTimer, stopTimer, resetTimer } = useTimer(addTime)

    const handleChange = (e)=>{
        const { value } = e.target;
        setAddTime(value);
    }

    const totalTime = 60*(+(addTime[0]+addTime[1])) + 60*(+(addTime[5]+addTime[6])) + (+(addTime[10]+addTime[11]))
    
    const handleStart = ()=>{
        isRunning? stopTimer() : startTimer();
        // setTime(totalTime)
        setShowInp(false);
    }
    
    useEffect(()=>{
        if(time === 0){
            stopTimer();
        }
    },[time]);

    if(hidden){
        return null;
    };

    return (
        <div>
            {
                showInp? <input type="text" value={addTime} onChange={handleChange} /> :
                <h3 onClick={()=>setShowInp(true)}>{getTimeInString(time)}</h3>
            }
            <button onClick= {handleStart} >{isRunning?"STOP":"START"}</button>
            <button onClick = {resetTimer}>RESET</button>
        </div>
    )
}
