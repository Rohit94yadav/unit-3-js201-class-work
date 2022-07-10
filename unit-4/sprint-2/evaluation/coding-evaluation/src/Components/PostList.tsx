import React from 'react';
import { IInput } from './PostInput';

export const PostList = ({ body, email, time, curTime }: IInput) => {    

    let timeStamp;
    if(time !== undefined && curTime !== undefined){
        var timeDiff = (curTime - Number(time))/1000;
        if(timeDiff < 60){
            timeStamp = `posted ${timeDiff} seconds ago`
        }
        else if(timeDiff > 60){
            let secs = timeDiff % 60;
            let mins = Math.floor(timeDiff/60);
            timeStamp = `posted ${mins} minutes ${secs} seconds ago`
        }
        else if (timeDiff > 3599){
            let secs = timeDiff % 60;
            let mins = Math.floor(timeDiff/60);
            let hrs = Math.floor(timeDiff/3600);
            timeStamp = `posted ${hrs} hours ${mins} minutes ${secs} seconds ago`;
        }
    }

    
    return (
        <div>
            <p data-testid="body-list">{body}</p>
            <h6 data-testid="email-list">{email}</h6>
            <p data-testid="time-list">{timeStamp}</p>
        </div>
    )
}
