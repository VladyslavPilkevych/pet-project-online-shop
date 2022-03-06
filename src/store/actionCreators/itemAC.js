import { FETCH_DATA } from "../actions/itemsActions";
import {setIsLoading} from "./preloaderAC";

export const fetchData = () => {
    return async (dispatch) => {
        dispatch(setIsLoading(true));
        const data = await fetch('./data/serverAnswer.json').then(res => res.json());
        dispatch(setIsLoading(false));
        dispatch({ type: FETCH_DATA, payload: data })
    }
}