import {SET_IS_OPEN_MODAL, SET_CONFIG_MODAL} from "../actions/modalActions";

export const setIsOpenModal = (value) =>{
    return {type: SET_IS_OPEN_MODAL, payload: value}
}
export const setConfigModal = (value) =>{
    return {type: SET_CONFIG_MODAL, payload: value}
}