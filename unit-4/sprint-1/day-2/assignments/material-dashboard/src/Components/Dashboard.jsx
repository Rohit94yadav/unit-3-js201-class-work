import { Box, Card, CardContent, Grid, makeStyles, Paper, Typography } from '@material-ui/core';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getOrderDetails } from '../State/action';
import { BarChart } from './BarChart';
import { CardBar } from './CardBar';
import { PieChartComp } from './PieChart';
import { Users } from './Users';

const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
    },
    paper: {
      height: 70,
      width: 200,
    },
    control: {
      padding: theme.spacing(2),
    },
    box: {
        marginBottom: theme.spacing(4)
    }
  }));

export const Dashboard = () => {
    const classes = useStyles();
    
    const data = useSelector(state=> state.data) || [];

    const dispatch = useDispatch();

    let totalProcessing = 0;
    let totalShipped = 0;
    let totalCompleted = 0;
    
    for (let i = 0; i < data.length; i++){
        if (data[i].status === "shipped"){
            totalShipped++
        }
        else if (data[i].status === "processing"){
            totalProcessing++
        }
        else if (data[i].status === "completed"){
            totalCompleted++
        }
    }

    const psc = [
        {
            name: "Processing",
            value: totalProcessing
        },
        {
            name: "Shipped",
            value: totalShipped
        },
        {
            name: "Completed",
            value: totalCompleted
        }
    ]

    useEffect(()=>{
        dispatch(getOrderDetails());
    },[])

    return (
        <div style={{marginLeft:"320px"}}>
            <Box className={classes.box}>
                <Grid container justify="center" spacing={3}>
                    <Grid item xl={"auto"} lg={"auto"} md={"auto"} sm={"auto"} xs={"auto"}>
                        <Paper className={classes.paper}>
                            <Card>
                                <CardContent>
                                    <Typography gutterBottom>
                                        Total Users: {data.length}
                                    </Typography>
                                    <Typography>
                                        Completed: {totalCompleted}
                                    </Typography>
                                </CardContent>
                            </Card>
                        </Paper>
                    </Grid>
                </Grid>
            </Box>
            <Box>
                <Typography variant="h3" >Users</Typography>
                <Grid container justify="center" spacing={3}>
                    {data?.map( item => (
                        <Grid key={item.id} item xl={"auto"} lg={"auto"} md={"auto"} sm={"auto"} xs={"auto"}>
                        <Paper className={classes.paper}>
                            <Users {...item} />
                        </Paper>
                        </Grid>
                    ))}
                </Grid>
            </Box>
            <Box>
                <Grid>
                    <Grid item xl={8} lg={8} md={12} sm={12} xs={12}>
                        <CardBar title="Activity" chart={<BarChart />} />
                    </Grid>
                    <Grid item xl={4} lg={4} md={12} sm={12} xs={12}>
                        <CardBar title="Stat" chart={<PieChartComp  psc={psc} data={ data } />} />
                    </Grid>
                </Grid>
            </Box>
        </div>
    )
}
