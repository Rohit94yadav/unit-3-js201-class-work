import React, { useState } from 'react';
import { postData } from './api';
import {v4 as uuid} from 'uuid';

let initData = {
    flatNo: "",
    street: "",
    landmark: "",
    area: "",
    city: "",
    state: "",
    pinCode: ""
}

export const CreateAdr = () => {

    const [input, setInput] = useState(initData);

    const handleChange = (e)=>{
        const {name, value} = e.target;
        console.log(name, value)

        const updated = {
            ...input,
            [name]: value,
        };
        setInput(updated);
    };

    const handleSubmit = (e)=>{
        e.preventDefault();
        
        const payload = {
            id: uuid(),
            ...input
        }
        postData(payload)
        .then(res=>{
            console.log(res.data)
        })
        .catch(err=>{
            console.log(err);
        })
    }
    
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <label>
                    Flat No./ floor
                    <input type="text" required name="flatNo" onChange={handleChange} />
                </label>
                <label>
                    Street
                    <input type="text" required name="street" onChange={handleChange} />
                </label>
                <label>
                    Landmark
                    <input type="text" name="landmark" onChange={handleChange} />
                </label>
                <label>
                    Area/ Locality
                    <input type="text" required name="area" onChange={handleChange} />
                </label>
                <label>
                    City
                    <input type="text" required name="city" onChange={handleChange} />
                </label>
                <label>
                    State
                    <input type="text" required name="state" onChange={handleChange} />
                </label>
                <label>
                    PinCode
                    <input type="text" maxLength="6" required name="pinCode" onChange={handleChange} />
                </label>

                <button>Add</button>
            </form>
        </div>
    )
}
