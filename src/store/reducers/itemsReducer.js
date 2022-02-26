import { FETCH_DATA } from "../actions/itemsActions";
import { getItemFromLS, setItemToLS } from "../../utils/localStorage";
getItemFromLS('items');

const initialState = {
    // items: [],
    items: getItemFromLS('items') ? getItemFromLS('items').items : null,
};

const itemsReducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_DATA: {
            setItemToLS('items', { ...state, items: action.payload });
            return { ...state, items: action.payload };
        }
        default:
            return state;
    }
};

export default itemsReducer;