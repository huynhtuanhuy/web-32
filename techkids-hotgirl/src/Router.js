import React, { Component } from 'react';
import {
    BrowserRouter,
    Switch,
    Route,
} from "react-router-dom";

import Home from './containers/Home';
import PostDetail from './containers/PostDetail';
import Login from './containers/Login';

export default class Router extends Component {
    render() {
        return (
            <BrowserRouter>
                <Switch>
                    <Route exact path="/" component={Home} />
                    <Route path="/login" component={Login} />
                    <Route path="/post/:postId" component={PostDetail} />
                </Switch>
            </BrowserRouter>
        )
    }
}
