import cartReducer from "../cartReducer.js";
import { PUT_IN_CART, DELETE_FROM_CART, CLEAR_CART } from "../../actions/cartItemsActions";

const initialValues = {
    inCart: null,
}


describe("Cart Reducer works", () => {
    test("Should cartReducer returns state if params null", () => {
        expect(cartReducer()).toEqual(initialValues)
    })
})

describe("Check actions work", () => {
    test("Should action PUT_IN_CART works", ()=> {
        expect(cartReducer(initialValues, {type: PUT_IN_CART, payload: "Some Value"})).toEqual({
            ...initialValues,
            inCart: ["Some Value"]
        })
    })
    test("Should action DELETE_FROM_CART works", () => {
        const initialValuesRemove = {
            inCart: [{title: "First Title", id: 1}, {title: "Second Title", id: 2}],
        }
        expect(cartReducer(initialValuesRemove, { type: DELETE_FROM_CART, payload: 1 })).toEqual({
            ...initialValues,
            inCart: [{title: "Second Title", id: 2}]
        })
    })
    test("Should action CLEAR_CART works", () => {
        const initialValuesRemove = {
            inCart: [1, 2],
        }
        expect(cartReducer(initialValuesRemove, { type: CLEAR_CART })).toEqual({
            ...initialValues,
            inCart: null,
        })
    })
})