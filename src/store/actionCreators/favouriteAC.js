import { PUT_IN_FAVOURITE, DELETE_FROM_FAVOURITE } from "../actions/favouriteItemsActions";

export const addToFavourite = (id) => {
    return async (dispatch) => {
        const data = await fetch('./data/serverAnswer.json').then(res => res.json());
        data.forEach(item => {
            if (item.id === id) {
                return dispatch({ type: PUT_IN_FAVOURITE, payload: item })
            }
        })
    }
}
export const removeFromFavourite = (id) => {
    return { type: DELETE_FROM_FAVOURITE, payload: id }
}