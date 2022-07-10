import React, { useState } from 'react';
import styled from 'styled-components';

const Container = styled.div`

`;

const AutoSuggestions = styled.div`
    width: 200px;
    max-height: 145px;
    overflow: hidden;
    padding: 10px;
    line-height: 30px;
    height: 
    border: 0.0625rem solid #949494;
    border-radius: .5rem;
    background: #fff;
    z-index: 5;
    font-size: 14px;
    box-shadow: 0 0 0 1px #949494;
    margin: 10px auto;
`;

const Opt = styled.div`
    witdh: 100%;
    border-radius: 5px;
    padding: 0 10px;

    &:hover {
        background: #949494;
        cursor: pointer;
    }
`;

const Input = styled.input`
    width: 200px;
    padding: 0 10px; 
    height: 2rem;
    margin: 20px 0 10px;
    border: 0.0625rem solid #949494;
    outline: none;
    box-shadow: 0 0 0 1px #949494;
    border-radius: .5rem;
`;

export const Country = () => {
    var cities = require('../country-json/src/country-by-capital-city.json');
    console.log(cities)

    const [ countryInp, setCountryInp ] = useState("");
    const [ countryDisp, setCountryDisp ] = useState(false);

    const handleChange = (e)=>{
        const { value } = e.target;
        setCountryInp(value);
    }
    
    return (
        <div>
            <Input type="text" onClick={()=>setCountryDisp(true)} value={countryInp} onChange={handleChange} />
            {
                countryDisp &&
                <AutoSuggestions onMouseLeave={()=>setCountryDisp(false)}>
                    {
                        cities.filter(( {country} )=>country.indexOf(countryInp) > -1 ).map(loc => <Opt>{loc.country}</Opt>)
                    }
                </AutoSuggestions>
            }
        </div>
    )
}