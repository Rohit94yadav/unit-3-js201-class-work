import React from 'react'

export const Button = ({label, onClick, onHover}) => {
    return (
        <button data-testid="buttonId" onClick={onClick} onMouseOver={onHover}>
            {label}
        </button>
    )
}