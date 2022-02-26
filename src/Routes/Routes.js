import React from 'react';
import {Switch, Route} from 'react-router-dom';
import HomePage from "../pages/HomePage/HomePage.js";
import CartPage from "../pages/CartPage/CartPage.js";
import CardPage from "../pages/CardPage/CardPage.js";
import FavouritePage from "../pages/FavouritePage/FavouritePage.js";
import NoMatchPage from "../pages/NoMatchPage/NoMatchPage.js";


const Routes = () => {
    return (
        <Switch>
            <Route exact path='/'>
                <HomePage/>
            </Route>
            <Route exact path='/cart'>
                <CartPage/>
            </Route>
            <Route exact path='/favourite'>
                <FavouritePage/>
            </Route>
            <Route exact path="/card:id">
                <CardPage/>
            </Route>
            <Route path="*">
                <NoMatchPage/>
            </Route>
        </Switch>
    )
}
export default Routes