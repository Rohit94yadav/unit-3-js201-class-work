import { Box, Breadcrumbs, Button, TextField, Typography } from '@material-ui/core';
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addTodos } from '../State/action';

const initData = {
    task: '',
    status: false
}

export const TodoInput = () => {

    const [ inp, setInp ] = useState(initData);
    const dispatch = useDispatch();

    const handleChange = (e)=>{
        const { value } = e.target;
        const updated = {
            ...inp,
            task: value
        }
        setInp(updated);
    }

    const handleAdd = (payload)=>{
        dispatch(addTodos(payload));
        setInp(initData);
        alert("Todo Added Successfully");
    }
    
    return (
        <>
            <div style={{padding:'0 15px 5px'}}>
                <Breadcrumbs>
                    <Typography>Home</Typography>
                </Breadcrumbs>
            </div>
            <Box>
                <TextField value={inp.task} onChange={handleChange} />
                <Button onClick={()=>handleAdd(inp)} color="secondary" variant="contained" >Add</Button>
            </Box>
        </>
    )
}
