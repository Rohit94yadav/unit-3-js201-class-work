import { Grid, IconButton, makeStyles, Typography, Switch } from '@material-ui/core'
import EditIcon from '@material-ui/icons/Edit';
import { memo, useMemo } from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { getTodos, toggleTodo } from '../State/action';

const Cont = styled.div`
    margin: 5px 0;
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 20px;
    border-radius: 5px;
`;

export const TodoOut = memo(({ id, task, status, }) => {

    const r = Math.floor(Math.random()*256)
    const g = Math.floor(Math.random()*256)
    const b = Math.floor(Math.random()*256)

    const randomColor = useMemo(() => `rgb(${r}, ${g}, ${b})`, [])

    const dispatch = useDispatch();

    const payload = {
        id, status
    }

    const handleToggle= (payload)=>{
        dispatch(toggleTodo(payload))
        dispatch(getTodos());
    }
    
    return (
        <>
            <Grid container justify="center" spacing={1}>
                <Cont style={{background:`${randomColor}`}}>
                    <Typography>{task}</Typography>
                    <Typography>{status? "Done" : "Not Done"}</Typography>
                    <Switch checked={status}
                            onChange={()=>handleToggle(payload)}
                            color="primary" />
                    <IconButton>
                        <Link to={`/todos/${id}`} style={{color:'inherit', textDecoration:'none'}} ><EditIcon /></Link>
                    </IconButton>
                </Cont>
            </Grid>
        </>
    )
})
