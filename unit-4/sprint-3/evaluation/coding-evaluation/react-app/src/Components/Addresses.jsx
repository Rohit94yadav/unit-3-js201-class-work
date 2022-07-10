import React, { useEffect, useState } from 'react'
import { getData } from './api';
import { OutAdr } from './OutAdr';

export const Addresses = () => {

    const [data, setData] = useState([]);

    const handleGetData = ()=>{
        getData()
        .then(res=>{
            setData(res.data);
        })
        .catch(err=>{
            console.log(err);
        })
    }
    console.log(data)

    useEffect(()=>{
        handleGetData();
    },[])
    
    return (
        <div>
            {
                data.map(adr=> (
                    <OutAdr key={adr.id} {...adr} />
                ))
            }
        </div>
    )
}
