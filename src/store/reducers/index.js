import { combineReducers } from "redux";
import itemsReducer from "./itemsReducer";
import cartReducer from "./cartReducer";
import favouriteReducer from "./favouriteReducer";
import modalReducer from "./modalReducer";
import preloaderReducer from "./preloaderReducer";

const reducer = combineReducers({
    items: itemsReducer,
    cart: cartReducer,
    favourite: favouriteReducer,
    modal: modalReducer,
    loader: preloaderReducer,
});

export default reducer;