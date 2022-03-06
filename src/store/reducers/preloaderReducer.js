import { TOGGLE_PRELOADER } from "../actions/preloaderActions";

const initialValues = {
    isLoading: false,
}

const preloaderReducer = (state = initialValues, action) => {
    switch (action.type) {
        case TOGGLE_PRELOADER: {
            return { isLoading: action.payload }
        }
        default: return state
    }
}

export default preloaderReducer;