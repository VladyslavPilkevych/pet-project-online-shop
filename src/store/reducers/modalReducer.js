import {SET_CONFIG_MODAL, SET_IS_OPEN_MODAL} from "../actions/modalActions";

const initialValues = {
    isOpen: false,
    config: null,
}

const modalReducer = (state = initialValues, action) => {
    switch (action?.type) {
        case SET_IS_OPEN_MODAL: {
            return {...state, isOpen: action.payload}
        }
        case SET_CONFIG_MODAL:{
            return {...state, config: action.payload}
        }
        default:
            return state
    }
}

export default modalReducer;