import { Card, CardContent, Typography } from '@material-ui/core';
import React from 'react';

export const Users = ({ full_name }) => {
    
    return (
        <>
            <Card>
                <CardContent>
                    <Typography gutterBottom>
                        { full_name }
                    </Typography>
                </CardContent>
            </Card>
        </>
    )
}
