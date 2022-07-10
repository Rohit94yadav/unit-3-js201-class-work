import React, { useState } from 'react'

export const Input = () => {

    const [value, setValue] = useState();
    
    return (
        <div>
            <input 
                autoFocus 
                type="text" 
                name="input" 
                value={value} 
                onChange={(e)=>setValue(e.target.value)} 
                className='input-form' />
        </div>
    )
}
