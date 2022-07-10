import React from 'react'
import { Route, Switch } from 'react-router-dom';
import { Addressespage } from './Addressespage';
import { CreateAdrPage } from './CreateAdrPage';
import { EditPage } from './EditPage';
import { NavBar } from './NavBar'

export const Routes = () => {
    return (
        <div>
            <NavBar />
            <Switch>
                <Route path='/addresses' exact>
                    <Addressespage />
                </Route>
                <Route path='/addresses/create' exact>
                    <CreateAdrPage />
                </Route>
                <Route path=' /addresses/:id/edit' exact>
                    <EditPage />
                </Route>
            </Switch>
        </div>
    )
}
