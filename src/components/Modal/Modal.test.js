import Modal from './Modal';
import { render, screen, fireEvent } from "@testing-library/react";
import { Provider, useDispatch } from "react-redux";
import store from "../../store";
import { setIsOpenModal, setConfigModal } from "../../store/actionCreators/modalAC.js";

const Component = () => {
    return (
        <Provider store={store}>
            <Modal />
            <Button />
        </Provider>
    );
}

const Button = () => {
    const dispatch = useDispatch();
    const handleClick = () => {
        dispatch(setIsOpenModal(true));
        dispatch(setConfigModal({ id: 2, toggleAddRemoveItem: false, title: "Test Title", body: "Test Body" }));
    };
    return (
        <button onClick={handleClick}>Open Modal</button>
    );
}

describe('modal will render', () => {
    test('should modal be open', () => {
        render(<Component />);
        const button = screen.getByText('Open Modal');
        fireEvent.click(button);
        expect(screen.getByText('Test Title')).toBeInTheDocument();
    });

    test('should modal be closed on click X', () => {
        render(<Component />);
        const button = screen.getByText('Open Modal');
        fireEvent.click(button);
        const x = screen.getByText('✕');
        fireEvent.click(x);
        expect(screen.queryByTestId('root')).not.toBeInTheDocument();
    });
});
