import React from 'react';

interface ITodoInputPros {
    onClick: (value: string | null)=> void;
}

export const TodoInput = ({ onClick }: ITodoInputPros) => {

    const [ input, setInput ] = React.useState<string | undefined>(undefined);

    const handleChange: React.ChangeEventHandler<HTMLInputElement> = (e)=>{
        setInput(e.target.value);
    }

    const handleSubmit: React.MouseEventHandler<HTMLButtonElement> = ()=>{
        if(!input){
            onClick(null);
            return;
        }
        onClick(input);
        setInput('');
    }
    
    return (
        <div style={{padding:'10px'}}>
            <input type="text" value={input} onChange={handleChange} placeholder="Enter Something" />
            <button onClick={handleSubmit}>Add</button>
        </div>
    )
}