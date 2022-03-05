import { PUT_IN_FAVOURITE, DELETE_FROM_FAVOURITE } from "../actions/favouriteItemsActions.js";
import { getItemFromLS, setItemToLS } from "../../utils/localStorage";

getItemFromLS('favourite');
const initialState = {
    inFavourite: getItemFromLS('favourite') ? getItemFromLS('favourite').inFavourite : null,
};

const favouriteReducer = (state = initialState, action) => {
    switch (action?.type) {
        case PUT_IN_FAVOURITE: {
            if (state.inFavourite === null) {
                setItemToLS("favourite", { ...state, inFavourite: [action.payload] });
                return { ...state, inFavourite: [action.payload] };
            }
            setItemToLS("favourite", { ...state, inFavourite: [...state.inFavourite, action.payload] });
            return { ...state, inFavourite: [...state.inFavourite, action.payload] };
        }
        case DELETE_FROM_FAVOURITE: {
            const index = state.inFavourite.findIndex((item) => item.id === action.payload)
            const newFavouriteData = [...state.inFavourite];
            newFavouriteData.splice(index, 1);
            setItemToLS("favourite", { ...state, inFavourite: newFavouriteData });
            return { ...state, inFavourite: newFavouriteData }
        }
        default:
            return state;
    }
};
export default favouriteReducer;