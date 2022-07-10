import React from 'react'
import { Route, Switch } from 'react-router-dom'
import { Todo } from '../Components/Todo'
import { TodoEdit } from '../Components/TodoEdit'
import { CompletedTasks } from '../Components/CompletedTasks'

export const Routes = () => {
    return (
        <div>
            <Switch>
                <Route path="/" exact>
                    <Todo />
                </Route>
                <Route exact path='/todo/:id'>
                    <TodoEdit />
                </Route>
                <Route exact path='/todos/completed'>
                    <CompletedTasks />
                </Route>
            </Switch>
        </div>
    )
}
