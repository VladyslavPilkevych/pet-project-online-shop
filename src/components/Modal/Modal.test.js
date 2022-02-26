import Modal from './Modal'
import { fireEvent, getByText, queryByTestId, queryByText, render, screen } from "@testing-library/react";
import React, { useState } from "react";
import { BrowserRouter } from "react-router-dom";
import { Provider, useDispatch } from "react-redux";
import store from "../../store";
import { setIsOpenModal, setConfigModal } from "../../store/actionCreators/modalAC.js";



const Component = () => {
    return (
        <Provider store={store}>
            <Modal />
            <Button />
        </Provider>
    )
}

const Button = () => {
    const dispatch = useDispatch();
    const handleClick = () => {
        dispatch(setIsOpenModal(true))
        dispatch(setConfigModal({ id: 2, toggleAddRemoveItem: false, title: "Test Title", body: "Test Body" }))
    }
    return (
        <button onClick={handleClick} >Open Modal</button>
    )
}

describe('modal will render', () => {
    test('should modal be open', () => {
        const { getByText } = render(<Component />)
        const button = getByText('Open Modal');
        button.click();
        expect(getByText('Test Title')).toBeInTheDocument();
    })
    test('should modal be close on click X', () => {
        const { getByText } = render(<Component />)
        const button = getByText('Open Modal');
        button.click();
        const x = screen.getByText('✕');
        x.click();
        expect(screen.queryByTestId('root')).not.toBeInTheDocument()
    })
    // test('should modal be close by bg', () => {
    //     const { getByText } = render(<Component />)
    //     const button = getByText('Open Modal');
    //     button.click();
    //     const bg = screen.queryByTestId('root');
    //     bg.click();
    //     expect(screen.queryByTestId('root')).not.toBeInTheDocument()
    // })
})
