import { Box, Button, makeStyles, Paper, TextField, Typography } from '@material-ui/core'
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addTodos } from '../State/action';

const useStyles = makeStyles((theme)=>({
    container: {
        padding: theme.spacing(3),
        width: theme.spacing(50),
        textAlign: "center",
        margin: "auto",
        marginTop: theme.spacing(5),
        backgroundImage: "linear-gradient(to right top, #5e945e, #95894b, #b77c5e, #bd7784, #a57fa8)",
    },
    input: {
        margin: theme.spacing(1)
    },
    btn: {
        margin: theme.spacing(1),
        height: theme.spacing(6.5),
        width: theme.spacing(15)
    }
}))

const initData = {
    task: '',
    status: false
};

export const TodoInput = () => {

    const [ input, setInput ] = useState(initData);

    const classes = useStyles();

    const dispatch = useDispatch();

    const handleChange = (e)=>{
        const { value } = e.target;

        const updated = {
            ...input,
            task: value
        };
        setInput(updated);
    };

    const handleAdd = (payload)=>{
        dispatch(addTodos(payload))
    };
    
    return (
        <Box>
            <Paper className={classes.container}>
                <Typography variant="h5" >TODOS</Typography>
                <TextField className={classes.input} type="text" variant="outlined" onChange={handleChange} />
                <Button onClick={()=>handleAdd(input)} className={classes.btn} variant="contained" color="primary">Add</Button>
            </Paper>
        </Box>
    )
}
