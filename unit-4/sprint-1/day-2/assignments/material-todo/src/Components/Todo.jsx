import React, { useEffect, useState } from 'react';
import { Box, Button, Container, makeStyles, Typography } from '@material-ui/core';
import { TodoInput } from './TodoInput';
import { useDispatch, useSelector } from 'react-redux';
import { getTodos } from '../State/action';
import { TodoOut } from './TodoOut';
import { Link } from 'react-router-dom';

const useStyles = makeStyles(theme=>({
    btn: {
        position: "absolute",
        top: theme.spacing(5),
        right: theme.spacing(5)
    },
    box :{
        width: theme.spacing(40),
        margin: "auto",
        display: "flex",
        justifyContent: "center"
    },
    pgNo: {
        marginTop: theme.spacing(4)
    },
    pgBtn: {
        margin: theme.spacing(3)
    }
}))

export const Todo = () => {

    const classes = useStyles();

    const [ page, setPage ] = useState(1);

    const data = useSelector(state=> state.data)

    const dispatch = useDispatch()

    useEffect(()=>{
        dispatch(getTodos(page));
    },[page])
    
    return (
        <>
            <Link to="/todos/completed" ><Button variant="outlined" className={classes.btn} >Completed Tasks</Button></Link>
            <Container>
                <TodoInput />
                <Box>
                    {
                        data.map(item=> <TodoOut {...item} />)
                    }
                </Box>
                <Box className={classes.box}>
                    <Button disabled={page === 1} className={classes.pgBtn} onClick={()=>setPage(page - 1)} variant="contained" color="primary" >Prev</Button>
                    <Typography className={classes.pgNo}>{page}</Typography>
                    <Button disabled={data.length < 5} className={classes.pgBtn} onClick={()=>setPage(page + 1)} variant="contained" color="primary" >Next</Button>
                </Box>
            </Container>
        </>
    )
}
