import React from 'react'
import { Button } from '../Button/Button';

export const Counter = ({ initValue=0, label="Counter", factor=1}) => {

    const [ value, setValue ] = React.useState(initValue);
    
    return (
        <div>
            <h3 data-testid="counter-label" >{label}</h3>
            <h4 data-testid="counter-value" >{value}</h4>
            <div>
                <Button label="ADD" onClick={()=>setValue(value + factor)} />
                <Button label="REDUCE" onClick={()=>setValue(value - factor)} />
            </div>
        </div>
    )
}
