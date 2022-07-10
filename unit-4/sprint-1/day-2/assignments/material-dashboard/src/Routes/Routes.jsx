import { Switch, Route } from 'react-router-dom';
import React from 'react'
import { Dashboard } from '../Components/Dashboard';
import { Orders } from '../Components/Orders';

export const Routes = () => {
    return (
        <div>
            <Switch>
                <Route path="/" exact>
                    <Dashboard />
                </Route>
                <Route path="/orders">
                    <Orders />
                </Route>
            </Switch>
        </div>
    )
}