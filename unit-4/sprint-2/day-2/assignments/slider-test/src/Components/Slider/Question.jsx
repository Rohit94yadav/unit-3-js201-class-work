import React from 'react'

export const Question = ({id, question, answer}) => {
    return (
        <div key={id} style={{border:'1px solid black', margin:'10px'}}>
            <h4 data-testid="slider-question" >{question}</h4>
            <p data-testid="slider-answer" >{answer}</p>
        </div>
    )
}
