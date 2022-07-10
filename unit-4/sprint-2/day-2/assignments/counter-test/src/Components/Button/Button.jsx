import React from 'react'

export const Button = ({label, onClick}) => {
    return (
        <button data-testid="buttonId" onClick={onClick}>
            {label}
        </button>
    )
}