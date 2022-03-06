import React from 'react';
import {Switch, Route} from 'react-router-dom';
import HomePage from "../pages/HomePage/HomePage";
import CartPage from "../pages/CartPage/CartPage";
import CardPage from "../pages/CardPage/CardPage";
import FavouritePage from "../pages/FavouritePage/FavouritePage";
import NoMatchPage from "../pages/NoMatchPage/NoMatchPage";

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
export default Routes;