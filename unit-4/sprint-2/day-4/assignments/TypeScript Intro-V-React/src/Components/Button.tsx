import React from 'react';

interface IButtonProps {
    onClick: ()=> void;
    label: string;
}

export const Button = ({ onClick, label }: IButtonProps) => {
    return (
        <button onClick={onClick}>
            {label}
        </button>
    )
}
