import React from 'react'
import BlackShirt from "./BlackShirt";
import WhiteShirt from "./WhiteShirt";
import { About } from "./About";
import Login from './Login';
import Home from "./Home";
import {Route, BrowserRouter as Router} from 'react-router-dom'

export const Routes = () => {
    return (
        <div>
            <Router>
                <Route path='/' exact component={Home}></Route>
                <Route path='/BlackShirt' component={BlackShirt}></Route>
                <Route path='/WhiteShirt' component={WhiteShirt}></Route>
                <Route path='/About' component={About}></Route>
                <Route path='/Login' component={Login}></Route>
            </Router>
        </div>
    )
}

export default Routes;
