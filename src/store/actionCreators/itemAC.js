import { FETCH_DATA } from "../actions/itemsActions.js";

export const fetchData = () => {
    return async (dispatch) => {
        const data = await fetch('./data/serverAnswer.json').then(res => res.json());
        dispatch({ type: FETCH_DATA, payload: data })
    }
}