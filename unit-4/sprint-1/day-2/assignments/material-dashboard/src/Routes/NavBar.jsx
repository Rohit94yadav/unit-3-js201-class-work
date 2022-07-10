import React, { useState } from 'react';
import MenuIcon from '@material-ui/icons/Menu';
import { AppBar, Avatar, Box, Divider, Drawer, IconButton, List, ListItem, ListItemIcon, ListItemText, makeStyles, Toolbar, Typography } from '@material-ui/core';
import LockOpenIcon from '@material-ui/icons/LockOpen';
import clsx from "clsx";
import { useHistory } from "react-router-dom";
import DashboardIcon from '@material-ui/icons/Dashboard';
import AssignmentIcon from '@material-ui/icons/Assignment';

const drawerWidth = 320;

const useStyles = makeStyles(theme=>({
    root: {
        flexGrow: 1
    },
    menuButton: {
        marginRight: theme.spacing(2)
    },
    title: {
        display: "flex",
        alignItems: "center",
        flex: 1,
    },
    btnNavbar: {
        padding: theme.spacing(1)
    },
    drawer: {
        width: drawerWidth,
        flexShrink: 0
    },
    drawerPaper: {
        width: drawerWidth
    },
    appBar: {
        transition: theme.transitions.create(["margin", "width"], {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen
        })
    },
    appBarShift: {
        width: `calc(100% - ${drawerWidth}px)`,
        marginLeft: drawerWidth,
        transition: theme.transitions.create(["margin", "width"], {
            easing: theme.transitions.easing.easeOut,
            duration: theme.transitions.duration.enteringScreen
        })
    },
    drawerHeader: {
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        padding: theme.spacing(4, 1),
        
        ...theme.mixins.toolbar,
        justifyContent: "flex-end"
    },
    content: {
        flexGrow: 1,
        padding: theme.spacing(3),
        transition: theme.transitions.create("margin", {
          easing: theme.transitions.easing.sharp,
          duration: theme.transitions.duration.leavingScreen
        }),
        marginLeft: -drawerWidth
    },
    contentShift: {
        transition: theme.transitions.create("margin", {
            easing: theme.transitions.easing.easeOut,
            duration: theme.transitions.duration.enteringScreen
        }),
        marginLeft: 0
    },contentHeader: {
        display: "flex",
        alignItems: "center",
        padding: theme.spacing(0, 1),
        // necessary for content to be below app bar
        ...theme.mixins.toolbar,
        justifyContent: "flex-end"
      }
}))

export const NavBar = (props) => {

    const classes = useStyles();

    const [ open, setOpen ] = useState(false);

    const history = useHistory();

    const handleOpen = ()=>{
        setOpen(!open)
    }

    const handleRouteChange = (to)=>{
        history.push(to);
    }
    
    return (
        <>
            <AppBar positon="fixed" className={clsx(classes.appBar, {[classes.appBarShift]: open})}>
                <Toolbar>
                    <Box className={classes.title} >
                        <IconButton className={classes.menuButton} color="inherit" aria-label="menu" edge="start" onClick={handleOpen} >
                            <MenuIcon />
                        </IconButton>
                        <Typography variant="h5" color="inherit" >Home</Typography>
                        <Typography className={classes.btnNavbar} variant="h5" color="inherit" >About</Typography>
                    </Box>
                    <IconButton color="inherit" >
                        <LockOpenIcon />
                        <Typography className={classes.btnNavbar} variant="h5" >Sign In</Typography>
                    </IconButton>
                    <Typography variant="h5" color="inherit" >Register</Typography>
                </Toolbar>
            </AppBar>
            <Drawer className={classes.drawer} variant="persistent" anchor="left" classes={{paper: classes.drawerPaper }} open={open}>
                <div className={classes.drawerHeader}>
                    <Avatar>KY</Avatar>
                    <Typography variant="h5">Kartik Yadav</Typography>
                    <Typography variant="subtitle1" >Gurugram</Typography>
                </div>
                <Divider />
                <List>
                    {[
                        {
                            text: "Dashboard",
                            icon: <DashboardIcon />,
                            to: "/"
                        },
                        {
                            text: "Orders",
                            icon: <AssignmentIcon />,
                            to: "/orders"
                        }
                    ].map(item=>(
                        <ListItem onClick={()=>handleRouteChange(item.to)} button key={item.text}>
                            <ListItemIcon>{item.icon}</ListItemIcon>
                            <ListItemText primary={item.text } />
                        </ListItem>
                    ))}
                </List>
            </Drawer>
            <main className={clsx(classes.content, {[classes.contentShift]: open})} >
                <div className={classes.contentHeader} />
                { props.children }
            </main>
        </>
    )
}
