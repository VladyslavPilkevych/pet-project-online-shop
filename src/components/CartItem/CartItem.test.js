import CartItem from './CartItem'
import { fireEvent, getByText, queryByTestId, queryByText, render, screen } from "@testing-library/react";
import React, { useState } from "react";
import { BrowserRouter } from "react-router-dom";
import { Provider, useDispatch } from "react-redux";
import store from "../../store";
import { setIsOpenModal, setConfigModal } from "../../store/actionCreators/modalAC.js";
import Modal from "../Modal/Modal.js"

const itemContent = {
    name: "Test Name",
    price: 70,
    url: "Some URL",
    id: 2,
    color: "blue"
}

const Component = () => {
    return (
        <Provider store={store}>
            <CartItem itemContent={itemContent} />
        </Provider>
    )
}

describe('modal "delete from cart" will render', () => {
    test('should modal be open', () => {
        const { getByText } = render(<Component />)
        const button = getByText('Delete From Shopping Cart');
        button.click();
        // expect(getByText("Delete from cart?")).toBeInTheDocument();
        expect(getByText('Test Name')).toBeInTheDocument();
    })
})
