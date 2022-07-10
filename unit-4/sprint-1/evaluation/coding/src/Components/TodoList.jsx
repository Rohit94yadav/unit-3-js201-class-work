import { Breadcrumbs, Grid, makeStyles, Typography } from '@material-ui/core';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { getTodos } from '../State/action';
import { TodoOut } from './TodoOut';

const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
    },
    paper: {
      height: 140,
      width: 100,
    },
    control: {
      padding: theme.spacing(2),
    },
}));

export const TodoList = () => {
    const classes = useStyles();

    const data = useSelector(state=> state.data);
    const dispatch = useDispatch();

    useEffect(()=>{
        dispatch(getTodos());
    },[])
    
    return (
        <>
            <div style={{padding:'0 15px 5px'}}>
                <Breadcrumbs>
                    <Link to="/" style={{color:'inherit', textDecoration:'none'}} >
                        Home
                    </Link>
                    <Typography>Todos</Typography>
                </Breadcrumbs>
            </div>
            <div style={{padding:'0 15px'}}>
                <Grid xs={12} sm={6} md={4} lg={3} xl={2} >
                    {
                        data?.map(item=> <TodoOut key={item.id} {...item} />)
                    }
                </Grid>
            </div>
        </>
    )
}
