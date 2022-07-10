import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { Navbar } from './Navbar';
import { HomePage } from './HomePage';
import { TodoListPage } from './TodoListPage';
import { IndTodoPage } from './IndTodoPage';

export const Routes = () => {
    return (
        <>
            <Navbar>
                <Switch>
                    <Route path='/' exact>
                        <HomePage />
                    </Route>
                    <Route path='/todo' exact>
                        <TodoListPage />
                    </Route>
                    <Route path='/todo/:id'>
                        <IndTodoPage />
                    </Route>
                    <Route>
                        Error 404: Page Not Found
                    </Route>
                </Switch>
            </Navbar>
        </>
    )
}
