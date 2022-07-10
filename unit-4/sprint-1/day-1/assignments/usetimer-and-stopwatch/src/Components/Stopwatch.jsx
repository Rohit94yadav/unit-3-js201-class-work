import React from 'react'
import { useStopwatch } from '../CustomHooks/useStopwatch'
import { getTimeInString } from './getTimeInString'

export const Stopwatch = ({ hidden }) => {

    const { time, isRunning, startTimer, stopTimer, resetTimer } = useStopwatch(1000)

    if(hidden){
        return null;
    };
    
    return (
        <div>
            <h3>{getTimeInString(time)}</h3>
            <button onClick={isRunning? stopTimer : startTimer} >{ isRunning? "STOP":"START" }</button>
            <button onClick={resetTimer} >RESET</button>
        </div>
    )
}