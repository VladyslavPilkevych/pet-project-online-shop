import modalReducer from "../modalReducer.js";
import {SET_IS_OPEN_MODAL, SET_CONFIG_MODAL} from "../../actions/modalActions";

const initialValues ={
    isOpen: false,
    config: null,
}


describe("Modal Reducer works", ()=>{
    test("Should modalReducer returns state if params null",()=>{
        expect(modalReducer()).toEqual(initialValues)
    })
})

describe("Check actions work", ()=> {
    test("Should action SET_IS_OPEN_MODAL works", ()=> {
        expect(modalReducer(initialValues, {type: SET_IS_OPEN_MODAL, payload: true})).toEqual({
            ...initialValues,
            isOpen: true
        })
    })
    test("Should action SET_CONFIG_MODAL works", ()=> {
        expect(modalReducer(initialValues, {type: SET_CONFIG_MODAL, payload: "Some Title"})).toEqual({
            ...initialValues,
            config: "Some Title"
        })
    })
})
