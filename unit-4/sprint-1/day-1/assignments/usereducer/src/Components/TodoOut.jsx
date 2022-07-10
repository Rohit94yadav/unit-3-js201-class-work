import React from 'react'

export const TodoOut = ({ task, status }) => {
    return (
        <div style={{border:"1px solid black"}}>
            <p>{ task }</p>
            <p>{ status? "Done" : "Not Done" }</p>
        </div>
    )
}
