import React, { useEffect, useState } from 'react'

export const useTimeout = (delay) => {

    const [ ready, setReady ] = useState(false);

    useEffect(()=>{
        let timer = setTimeout(()=> setReady(true), delay);
        return ()=> clearTimeout(timer);
    },[])

    return ready;
}
