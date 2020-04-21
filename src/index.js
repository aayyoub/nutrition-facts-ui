import React from 'react';
import * as ReactDOM from 'react-dom';
import {BrowserRouter as Router, Route, Switch, useParams} from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';
import Home from './page/home/Home';
import Food from './page/food/Food';

export default function App() {
    return (
        <Router>
            <Switch>
                <Route path="/:foodName/:servingSize" children={<FoodRoute/>}/>
                <Route path="/:foodName" children={<FoodRoute/>}/>
                <Route path="/">
                    <Home/>
                </Route>
            </Switch>
        </Router>
    );
}

function FoodRoute() {
    let {foodName} = useParams();
    let {servingSize} = useParams();

    return (
        <Food foodName={foodName} servingSize={servingSize}/>
    );
}

ReactDOM.render(App(), document.getElementById('root'));
