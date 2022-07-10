import React from 'react';
import { Button } from '../Button/Button';
import { Question } from './Question';

const data = [
    {
        id: 1,
        question : 1,
        answer: 1,
    },
    {
        id: 2,
        question : 2,
        answer: 2,
    },
    {
        id: 3,
        question : 3,
        answer: 3,
    },
    {
        id: 4,
        question : 4,
        answer: 4,
    },
    {
        id: 5,
        question : 5,
        answer: 5,
    }
]

export const Slider = ({quNo=0}) => {

    const [ question, setQuestion ] = React.useState(quNo)
    
    return (
        <div>
            <Question {...data[question]} />
            <div style={{display:'flex', justifyContent:"center"}}>
                <Button disabled={question === 0} label="Prev" onClick={()=>setQuestion(question - 1)} />
                <p data-testid="slider-question-number" style={{margin:"0 10px"}}>{question + 1}</p>
                <Button disabled={question === data.length-1} label="Next" onClick={()=>setQuestion(question + 1)} />
            </div>
        </div>
    )
}
