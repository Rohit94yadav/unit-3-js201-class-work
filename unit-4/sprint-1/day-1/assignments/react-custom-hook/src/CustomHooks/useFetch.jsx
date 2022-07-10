import React, { useEffect, useState } from 'react'

export const useFetch = ({ url }) => {
    
    const [ data, setData] = useState(null);

    const [ isLoading, setIsLoading ] = useState(false);

    const [ isError, setIsError ] = useState(false);

    useEffect(()=>{
        setIsLoading(true);
        setIsError(false);
        fetch(url)
        .then(res => res.json())
        .then(res => {
            setData(res);
            setIsLoading(false);
            setIsError(false);
        })
        .catch(err=>{
            setIsError(true);
            setIsLoading(false);
        })
    },[url])
    
    return { data, isLoading, isError }
}
