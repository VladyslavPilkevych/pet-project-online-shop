import favouriteReducer from "../favouriteReducer.js";
import { PUT_IN_FAVOURITE, DELETE_FROM_FAVOURITE } from "../../actions/favouriteItemsActions";

const initialValues = {
    inFavourite: null,
}


describe("Favourite Reducer works", () => {
    test("Should favouriteReducer returns state if params null", () => {
        expect(favouriteReducer()).toEqual(initialValues)
    })
})

describe("Check actions work", () => {
    test("Should action PUT_IN_FAVOURITE works", ()=> {
        expect(favouriteReducer(initialValues, {type: PUT_IN_FAVOURITE, payload: "Some Value"})).toEqual({
            ...initialValues,
            inFavourite: ["Some Value"]
        })
    })
    test("Should action DELETE_FROM_FAVOURITE works", () => {
        const initialValuesRemove = {
            inFavourite: [{title: "First Title", id: 1}, {title: "Second Title", id: 2}, {title: "Third Title", id: 3}],
        }
        expect(favouriteReducer(initialValuesRemove, { type: DELETE_FROM_FAVOURITE, payload: 3 })).toEqual({
            ...initialValues,
            inFavourite: [{title: "First Title", id: 1}, {title: "Second Title", id: 2}]
        })
    })
})