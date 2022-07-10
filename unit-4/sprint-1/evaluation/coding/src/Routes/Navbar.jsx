import React from 'react';
import { AppBar, makeStyles, Toolbar, Typography } from '@material-ui/core';
import { Link } from 'react-router-dom';

const useStyles = makeStyles(theme=>({
    NavTypo: {
        padding: theme.spacing(1)
    }
}))

export const Navbar = ({ children }) => {
    const classes = useStyles();
    
    return (
        <div>
            <AppBar>
                <Toolbar>
                    <Link style={{color:'inherit', textDecoration:'none'}} to='/'><Typography className={classes.NavTypo} >Home</Typography></Link>
                    <Link style={{color:'inherit', textDecoration:'none'}} to='/todo'><Typography className={classes.NavTypo} >Todo List</Typography></Link>
                </Toolbar>
            </AppBar>
            { children}
        </div>
    )
}
