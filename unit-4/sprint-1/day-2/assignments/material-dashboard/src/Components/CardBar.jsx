import { Card, CardContent, makeStyles, Typography } from '@material-ui/core'
import React from 'react';

const useStyles = makeStyles(theme=>({
    header: {
        textTransform: "uppercase"
    }
}))

export const CardBar = ({ title, chart }) => {
    
    const classes = useStyles();
    
    return (
        <>
            <Card>
                <Typography className={classes.header} color="textPrimary">
                    {title}
                </Typography>
                <CardContent>
                    { chart }
                </CardContent>    
            </Card>   
        </>
    )
}
