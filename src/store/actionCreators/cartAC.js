import { PUT_IN_CART, DELETE_FROM_CART, CLEAR_CART } from "../actions/cartItemsActions.js";

export const addToCart = (id) => {
    return async (dispatch) => {
        const data = await fetch('./data/serverAnswer.json').then(res => res.json());
        data.forEach(item => {
            if (item.id === id) {
                return dispatch({ type: PUT_IN_CART, payload: item })
            }
        })
    }
}

export const removeFromCart = (id) => {
    return {type: DELETE_FROM_CART, payload: id}
}

export const clearCart = () => {
    return {type: CLEAR_CART, payload: null}
}