import React from 'react';
import { Route, Switch, BrowserRouter, Redirect } from 'react-router-dom';
import Home from './Pages/Home/Home.js';
import Details from './Pages/Details/Details';
import NotFound from './Pages/NotFound/NotFound.js';


export default function Routes() {
    return (
        <BrowserRouter>
            <Switch>
                <Route exact path="/" component={Home} />
                <Route exact path="/details/:id" component={Details} />
                <Route path="/404" component={NotFound} />
                <Redirect to="/404" />
            </Switch>
        </BrowserRouter>
    )
}