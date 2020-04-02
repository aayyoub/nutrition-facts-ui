import React from 'react';
import * as ReactDOM from 'react-dom';
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import Home from './page/home/Home';
import Food from './page/food/Food';

export default function App() {
    return (
        <Router>
            <Switch>
                <Route path="/food/">
                    <Food/>
                </Route>
                <Route path="/">
                    <Home/>
                </Route>
            </Switch>
        </Router>
    );
}

ReactDOM.render(App(), document.getElementById('root'));
