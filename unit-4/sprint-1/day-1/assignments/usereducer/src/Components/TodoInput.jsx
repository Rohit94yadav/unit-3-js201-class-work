import React from 'react';

export const TodoInput = ({ todoInp, handleChange, handleAdd }) => {

    const payload = {
        task: todoInp,
        status: false
    }
    
    return (
        <div>
            <input type="text" value={todoInp} onChange={handleChange} />
            <button onClick={()=>handleAdd(payload)} >Add</button>
        </div>
    )
}
