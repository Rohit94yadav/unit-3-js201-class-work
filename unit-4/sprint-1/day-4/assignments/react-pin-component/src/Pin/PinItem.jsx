import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';

const style = {
    padding: 5,
    width: 14,
    margin: 5,
    textAlign: 'center'
}

export const PinItem = forwardRef((props, ref) => {

    const { maxChar, onChange, onBackspace } = props;

    const handleChange = (e)=>{
        switch(e.keyCode){
            case 8: {
                onBackspace(e.target.value);
                break;
            }
            case 16:
            case 9: {
                e.preventDefault();
                break;
            }
            default: {
                onChange(e.target.value)
                break;
            }
        }
    }
    
    return (
        <div>
            <input style={style} onKeyUp={handleChange} type="text" maxLength={maxChar} ref={ref} />
        </div>
    )
})

PinItem.propTypes = {
    maxChar: PropTypes.number,
    onChange: PropTypes.func
}

PinItem.defaultProps = {
    maxChar: 1
}