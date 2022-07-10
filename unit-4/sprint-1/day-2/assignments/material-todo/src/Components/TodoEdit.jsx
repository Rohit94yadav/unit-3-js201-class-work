import { Box, Button, makeStyles, Modal, Paper, Switch, TextField, Typography } from '@material-ui/core';
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useHistory, useParams } from 'react-router'
import { deleteTodos, editTitle, getSingleTodo, toggleTodos } from '../State/action';
import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit';
import { Link } from 'react-router-dom';
import CloseIcon from '@material-ui/icons/Close';

const useStyles = makeStyles(theme=>({
    container: {
        padding: theme.spacing(3),
        paddingLeft: theme.spacing(10),
        paddingRight: theme.spacing(10),
        width: theme.spacing(40),
        height: theme.spacing(15),
        textAlign: "center",
        margin: "auto",
        marginTop: theme.spacing(5),
        backgroundImage: "linear-gradient(to right top, #5e945e, #95894b, #b77c5e, #bd7784, #a57fa8)"
    },
    box: {
        display: "flex",
        justifyContent: "space-between",
        marginTop: theme.spacing(3)
    },
    cursor: {
        cursor: "pointer"
    },
    paper: {
        width: theme.spacing(40),
        padding: theme.spacing(5),
        position: "absolute",
        top: "40%",
        right: "40%"
    },
    closeIcon: {
        position: "absolute",
        top: theme.spacing(1),
        right: theme.spacing(1),
        cursor: "pointer"
    },
    btn: {
        position: "absolute",
        top: theme.spacing(5),
        right: theme.spacing(5)
    }
}))

export const TodoEdit = () => {

    const { id } = useParams();
    const singleTodo = useSelector(state=> state.singleTodo);

    const [ popUp, setPopUp ] = useState(false);
    const [ editInp, setEditInp ] = useState("");

    const { task, status } = singleTodo;

    const history = useHistory();
    
    const classes = useStyles();

    const dispatch = useDispatch();

    const handleChange = (e)=>{
        const { value } = e.target;
        setEditInp(value);
    }

    const handleDelete = (id)=>{
        dispatch(deleteTodos(id));
    };

    const handleToggle = (payload)=>{
        dispatch(toggleTodos(payload))
        dispatch(getSingleTodo(payload.id))
    }


    const updateData = {
        id,
        editInp
    }
    
    const handleEdit = (payload)=>{
        dispatch(editTitle(payload));
        setEditInp("");
        setPopUp(false);
    }

    const goBack = ()=>{
        history.push("/");
    }

    useEffect(()=>{
        dispatch(getSingleTodo(id));
    },[]);
    
    return (
        <>
            <Button className={classes.btn} variant="outlined" onClick={goBack} >Home</Button>
            <Modal open={popUp} >
                <Paper className={classes.paper}>
                    <CloseIcon variant="contained" className={classes.closeIcon} onClick={()=>setPopUp(false)} />
                    <TextField onChange={handleChange} />
                    <Button variant="outlined" onClick={()=>handleEdit(updateData)} >Edit</Button>
                </Paper>
            </Modal>
            <Box>
            <Paper className={classes.container}>
                <Box className={classes.box}>
                    <Typography>Title: {task}</Typography>
                    <Typography>Status: {status ? "Done" : "Not Done"}</Typography>
                </Box>
                <Box className={classes.box}>
                    <Switch checked={status} onChange={()=>handleToggle(singleTodo)} />
                    <DeleteIcon className={classes.cursor} onClick={()=>handleDelete(id)} />
                    <EditIcon className={classes.cursor} onClick={()=>setPopUp(true)} />
                </Box>
            </Paper>
            </Box>
        </>
    )
}
