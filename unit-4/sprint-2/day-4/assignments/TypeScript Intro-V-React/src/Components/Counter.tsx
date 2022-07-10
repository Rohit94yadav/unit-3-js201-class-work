import React from 'react'
import { Button } from './Button'

export const Counter = () => {

    const [ count, setCount ] = React.useState<number>(0);

    const handleCount = (value: number)=>{
        setCount(count + value);
    };
    
    return (
        <div>
            <h1>{count}</h1>
            <Button onClick={()=>handleCount(1)} label="ADD" />
            <Button onClick={()=>handleCount(-1)} label="REDUCE" />
        </div>
    )
}
