import React from 'react';
import { Route, Switch, BrowserRouter } from 'react-router-dom';
import Home from './Pages/Home/Home.js';
import Details from './Pages/Details/Details';


export default function Routes() {
    return (
        <BrowserRouter>
            <Switch>
                <Route exact path="/" component={Home} />
                <Route exact path="/details/:id" component={Details} />
            </Switch>
        </BrowserRouter>
    )
}