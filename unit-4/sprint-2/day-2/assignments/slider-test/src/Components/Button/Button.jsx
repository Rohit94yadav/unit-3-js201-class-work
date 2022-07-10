import React from 'react'

export const Button = ({label, onClick, disabled}) => {
    return (
        <button data-testid="buttonId" disabled={disabled} onClick={onClick}>
            {label}
        </button>
    )
}