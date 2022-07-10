import { Box, Button, makeStyles, Paper, Typography } from '@material-ui/core'
import React from 'react';
import EditIcon from '@material-ui/icons/Edit';
import { Link } from 'react-router-dom';

const useStyles = makeStyles((theme)=>({
    container: {
        padding:theme.spacing(1),
        paddingLeft: theme.spacing(3),
        paddingRight: theme.spacing(3),
        width: theme.spacing(50),
        textAlign: "center",
        margin: "auto",
        marginTop: theme.spacing(2),
        backgroundImage: "linear-gradient(to right top, #5e945e, #95894b, #b77c5e, #bd7784, #a57fa8)",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center"
    },
    btn: {
        margin: theme.spacing(1),
        height: theme.spacing(6.5),
        width: theme.spacing(10)
    }
}))

export const TodoOut = ({ id, task, status }) => {

    const classes = useStyles();
    
    return (
        <Box>
            <Paper className={classes.container} >
                <Typography>Title: {task}</Typography>
                <Typography>Status: {status === true ? "Done" : "Not Done"}</Typography>
                <Link to={`/todo/${id}`}><EditIcon color="primary" /></Link>
            </Paper>
        </Box>
    )
}
