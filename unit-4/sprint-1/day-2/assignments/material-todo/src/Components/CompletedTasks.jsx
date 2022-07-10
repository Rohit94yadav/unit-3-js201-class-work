import { Box, Button, makeStyles } from '@material-ui/core';
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { getTodos } from '../State/action';
import { TodoOut } from './TodoOut';

const useStyles = makeStyles(theme=>({
    btn: {
        position: "absolute",
        top: theme.spacing(5),
        right: theme.spacing(5)
    }
}))

export const CompletedTasks = () => {

    const classes = useStyles();

    const data = useSelector(state=> state.data);

    const dispatch = useDispatch();

    const history = useHistory();

    const goBack = ()=>{
        history.push("/")
    }

    useEffect(()=>{
        dispatch(getTodos());
    },[])
    
    return (
        <>
            <Button className={classes.btn} onClick={goBack} variant="outlined" >Home</Button>
            <Box>
                {
                    data.filter(item=> item.status === true ).map(item=> <TodoOut key={item.id} {...item} />)
                }
            </Box>
        </>
    )
}
