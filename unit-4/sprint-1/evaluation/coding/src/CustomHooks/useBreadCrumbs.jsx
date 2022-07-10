import { Breadcrumbs } from '@material-ui/core'
import React from 'react'

export const useBreadCrumbs = ({ children }) => {
    return (
        <>
            <Breadcrumbs>
                { children }
            </Breadcrumbs>
        </>
    )
}
