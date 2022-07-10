import { Breadcrumbs, Typography } from '@material-ui/core'
import React from 'react'
import { Link, useParams } from 'react-router-dom'

export const IndTodo = () => {

    const { id } = useParams();
    
    return (
        <>
            <div style={{padding:'0 15px 5px'}}>
                <Breadcrumbs>
                    <Link to="/" style={{color:'inherit'}} >
                        Home
                    </Link>
                    <Typography>Todos</Typography>
                    <Typography>{id}</Typography>
                </Breadcrumbs>
            </div>
        </>
    )
}
