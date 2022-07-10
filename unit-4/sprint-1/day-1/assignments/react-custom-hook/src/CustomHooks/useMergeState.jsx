import { useState } from 'react';

export const useMergeState = (initState) => {
    const [ state, setState ] = useState(initState);

    const handleState = (e)=>{
        const { name, value } = e.target;
        setState({...state, [name] : value})
    }

    return [ state, handleState ]
}
