import { PUT_IN_CART, DELETE_FROM_CART, CLEAR_CART } from "../actions/cartItemsActions";
import { getItemFromLS, setItemToLS, removeItemFromLS } from "../../utils/localStorage";

getItemFromLS('cart');
const initialState = {
    inCart: getItemFromLS('cart') ? getItemFromLS('cart').inCart : null,
};

const cartReducer = (state = initialState, action) => {
    switch (action?.type) {
        case PUT_IN_CART: {
            if (state.inCart !== null) {
                const index = state.inCart.findIndex((item) => item.id === action.payload.id);
                if (index === -1) {
                    setItemToLS("cart", { ...state, inCart: [...state.inCart, action.payload] });
                    return { ...state, inCart: [...state.inCart, action.payload] };
                }
                setItemToLS("cart", state);
                return state;
            }
            setItemToLS("cart", { ...state, inCart: [action.payload] });
            return { ...state, inCart: [action.payload] };
        }
        case DELETE_FROM_CART: {
            const index = state.inCart.findIndex((item) => item.id === action.payload)
            const newFavouriteData = [...state.inCart];
            newFavouriteData.splice(index, 1);
            setItemToLS("cart", { ...state, inCart: newFavouriteData });
            return { ...state, inCart: newFavouriteData }
        }
        case CLEAR_CART: {
            removeItemFromLS("cart");
            return { ...state, inCart: null }
        }
        default:
            return state;
    }
};
export default cartReducer;