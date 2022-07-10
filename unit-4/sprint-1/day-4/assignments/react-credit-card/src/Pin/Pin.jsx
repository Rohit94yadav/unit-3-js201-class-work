import React, { useRef, useState } from 'react'
import { PinItem } from './PinItem';
import Proptypes from 'prop-types';

export const Pin = (props) => {

    const { len, inputBoxLength, handleState } = props;

    const [ values, setvalues ] = useState(new Array(len).fill(""));
    const elements = useRef(new Array(len).fill(0));

    const handleChange = (pinItemValue, i)=>{
        const val = [...values];
        val[i] = pinItemValue;
        setvalues(val);

        if(pinItemValue.length > 0 &&
            pinItemValue.length === inputBoxLength &&
            i < len-1 ){
                elements.current[i+1].focus();
        }
        handleState(val.join(""));
    }

    const onBackspace = (pinItemValue, i)=>{
        if( i > 0 && pinItemValue.length === 0 ){
            elements.current[i-1].focus();
        }

        const val = [...values];
        val[i] = pinItemValue;
        setvalues(val);
        handleState(val.join(""));
    }

    const handlePaste = (e)=>{
        e.preventDefault();
        const str = e.clipboardData.getData("Text");
        let val = new Array(len).fill("");

        for(let i = 0; i < len; i++){
            let strBox = str.slice(i*inputBoxLength, (i+1)*inputBoxLength)
            if (strBox === ""){
                break;
            }
            elements.current[i].value = strBox;
            val[i] = strBox;
            if( i < len-1 && strBox.length === inputBoxLength){
                elements.current[i+1].focus();
            }
            else {
                break;
            }
        }
        setvalues(val);
    }
    
    return (
        <div style={{display:'flex', justifyContent:'center'}} onPaste={handlePaste}>
            {
                values?.map((item, i)=> (
                    <PinItem 
                        key={i}
                        maxChar={inputBoxLength}
                        onChange={val=> handleChange(val, i)}
                        onBackspace={val=> onBackspace(val, i)}
                        ref={n=>elements.current[i] = n} />
                ))
            }
        </div>
    )
}

Pin.prototype = {
    label: Proptypes.string,
    handleState: Proptypes.func,
    len: Proptypes.number,
    inputBoxLength: Proptypes.number
}

Pin.defaultProps = {
    inputBoxLength: 1,
    len: 1,
    handleState: ()=>{}
}