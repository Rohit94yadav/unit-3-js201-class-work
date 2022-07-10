import React, { memo, useCallback, useState } from 'react';
import styled from 'styled-components';
import { v4 as uuid } from 'uuid';
import { MemoOut } from './MemoOut';

const Container = styled.div`
    display: flex;
    flex-direction: column;
    border: 1px solid black;
    padding: 20px;
    width: 400px;
    margin: auto;
`;

const initData = {
    title: '',
    body: '',
    verify: false
}

const areEqual = (prevProps, nextProps)=>{
    if (prevProps.timer === nextProps.timer){
        return false;
    }
    else {
        return true;
    }
}

export const Memo = memo(({timer}) => {

    const [ input, setInput ] = useState(initData);
    const [ data, setData ] = useState([]);

    const handleChange = (e)=>{
        const { name, value } = e.target;
        const updated = {
            ...input,
            [ name ] : value
        }
        setInput(updated);
    }

    const handleSubmit = ()=>{
        const payload = [
            ...data,
            {
                id: uuid(),
                ...input
            }
        ]
        setData(payload);
    }

    const toggleVerify = useCallback((id)=>{
        setData(prev=> prev.map(item=> item.id === id ? {...item, verify: !item.verify} : item));
    }, [])
    
    return (
        <>
            <Container>
                <input type="text" placeholder="Enter Title" name="title" onChange={handleChange} />
                <textarea cols="30" rows="10" name="body" placeholder="Write here" onChange={handleChange}></textarea>
                <button onClick={handleSubmit} >Add</button>
            </Container>

            {
                data.map(item=> <MemoOut key={item.id} {...item} timer={timer} toggleVerify={toggleVerify} />)
            }
        </>
    )
}, areEqual)
