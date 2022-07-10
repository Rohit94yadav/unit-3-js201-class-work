import React, { useState } from 'react';

const initValue = {
    body: "",
    email: "",
}

export interface IInput {
    body: string;
    email: string;
    id?: number;
    time?: string;
    curTime?: number;
}

interface IInputProps {
    onSubmit: (payload: IInput)=>void;
}

export const PostInput = ({onSubmit}: IInputProps) => {

    const [ input, setInput ] = useState<IInput>(initValue);

    const handleChange: React.ChangeEventHandler<HTMLInputElement> = (e)=>{
        const { name, value } =  e.target;

        const updated = {
            ...input,
            [name]: value
        }

        setInput(updated);
    }

    const handleSubmit: React.MouseEventHandler<HTMLButtonElement> = ()=>{
        onSubmit(input);
    }
    
    return (
        <div>
            <input data-testid="body-input" name="body" placeholder="Enter something" onChange={handleChange} />
            <input data-testid="email-input" type="text" name="email" placeholder="Enter Email" onChange={handleChange} />
            <button data-testid="sbtBtn" onClick={handleSubmit} >Submit</button>
        </div>
    )
}
