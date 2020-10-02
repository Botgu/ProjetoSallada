import React from 'react'
import { Route, Switch, BrowserRouter } from 'react-router-dom'
import Home from './Pages/Home'
import Details from './Pages/Details'


export default function Routes() {
    return (
        <BrowserRouter>
            <Switch>
                <Route exact path="/" component={Home} />
                <Route exact path="/details" component={Details} />
            </Switch>
        </BrowserRouter>
    )
}