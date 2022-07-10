import React, { useState } from 'react'
import { useMergeState } from '../CustomHooks/useMergeState';

const initState = {
    username: '',
    email: '',
    password: ''
}

export const Merge = () => {
    
    const [ state, handleState ] = useMergeState(initState);
    
    return (
        <>
            <div>
                <input type="text" value={state.username} name="username" placeholder="username" onChange={handleState} />
                <input type="email" value={state.email} name="email" placeholder="email" onChange={handleState} />
                <input type="password" value={state.password} name="password" placeholder="password" onChange={handleState} />
                <button>Add</button>
            </div>
            <div>
                <h3>{state.username}</h3>
                <p>{state.email}</p>
                <p>{state.password}</p>
            </div>
        </>
    )
}
