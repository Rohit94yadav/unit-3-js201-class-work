import React from 'react'
import { useTimeout } from '../CustomHooks/useTimeout'

export const Timeout = () => {

    const isReady = useTimeout(5000)
    
    return (
        <div>
            {
                isReady ? "Ready" : "Not Ready"
            }
        </div>
    )
}
