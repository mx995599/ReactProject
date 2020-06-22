import React from 'react';
import {HashRouter,Route,Switch} from "react-router-dom"
import Home from '../Pages/home'
import Shop from '../Pages/Shop'
import Life from '../Pages/Life'
import Mine from '../Pages/Mine'
import NotFound from '../Pages/NotFound'
import City from "../Pages/City"
import Search from "../Pages/Search";
import Detail from "../Pages//Details";
import Login from "../Pages/Login"
import Cart from "../Pages/Cart"

export default class App extends React.Component{
    render (){
        return (
            <HashRouter>
                <Switch>
                    <Route exact path="/" component={Home}></Route>
                    <Route  path="/life" component={Life}></Route>
                    <Route  path="/shop" component={Shop}></Route>
                    <Route  path="/mine" component={Mine}></Route>
                    <Route  path="/city" component={City}></Route>
                    <Route  path="/cart" component={Cart}></Route>
                    <Route  path="/search/:keyword" component={Search}></Route>
                    <Route  path="/detail/:id" component={Detail}></Route>
                    <Route  path="/login" component={Login}></Route>
                    <Route  component={NotFound}></Route>
                </Switch>
            </HashRouter>
        )
    }
}