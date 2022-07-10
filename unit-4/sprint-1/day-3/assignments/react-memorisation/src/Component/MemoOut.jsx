import React, { memo, useMemo } from 'react';

const delay = time =>  {
    const start = Date.now();
    while (Date.now() - start < time){
        continue;
    }
    return start;
}

const areEqual = (prevProps, nextProps)=>{
    if (prevProps.verify === nextProps.verify){
        return true;
    }
    else {
        return false;
    }
}

export const MemoOut = memo(({ id, title, body, verify, toggleVerify, timer }) => {

    const time = delay(50);

    const r = Math.floor(Math.random()*256)
    const g = Math.floor(Math.random()*256)
    const b = Math.floor(Math.random()*256)

    const randomColor = useMemo(() => `rgb(${r}, ${g}, ${b})`, [])
    
    return (
        <div style={{background:`${randomColor}`}}>
            <h3>{title}</h3>
            <p>{verify ? "Verified" : "Not Verified"}</p>        
            <p>{body}</p>
            <button onClick={()=>toggleVerify(id)} >Toggle</button>
        </div>
    )
})
