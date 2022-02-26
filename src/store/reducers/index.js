import { combineReducers } from "redux";
import itemsReducer from "./itemsReducer.js";
import cartReducer from "./cartReducer.js";
import favouriteReducer from "./favouriteReducer.js";
import modalReducer from "./modalReducer.js";

const reducer = combineReducers({
    items: itemsReducer,
    cart: cartReducer,
    favourite: favouriteReducer,
    modal: modalReducer,
});

export default reducer;