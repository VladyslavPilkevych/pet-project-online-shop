import React, {memo} from "react";
import styles from './Modal.module.scss';
import Button from "../Button/Button.js";
import { addToCart, removeFromCart } from "../../store/actionCreators/cartAC.js";
import { useDispatch, useSelector } from "react-redux";
import { setIsOpenModal } from "../../store/actionCreators/modalAC";

const Modal = () => {
    const isOpen = useSelector(state => state.modal.isOpen);
    const config = useSelector(state => state.modal.config);
    const dispatch = useDispatch();
    if (!isOpen) return null;
    const closeModal = () => {
        dispatch(setIsOpenModal(false));
    }
    const sendInCart = () => {
        dispatch(addToCart(config.id));
        dispatch(setIsOpenModal(false));
        console.log('Сохранение в корзину покупок');
    }
    const deleteFromCart = () => {
        dispatch(removeFromCart(config.id));
        dispatch(setIsOpenModal(false));
    }
    const deleteModalByBg = (e) => {
        if (e.target.classList.contains(styles.modalBg)) {
            dispatch(setIsOpenModal(false));
        }
    }
    return (
        <>
            <div className={styles.modalBg} onClick={deleteModalByBg} data-testid="root">
                <div className={styles.modal}>
                    <div className={styles.modal__topContainer}>
                        <button className={styles.x} onClick={closeModal}>✕</button>
                        <h2>{config.title}</h2>
                    </div>
                    <p className={styles.modal__body}>{config.body}</p>
                    {config.toggleAddRemoveItem ? <Button handleClick={() => { deleteFromCart(); }} backgroundColor="#B3382C" style={styles.modalBtn}>Okay</Button> : <Button handleClick={() => { sendInCart(); }} backgroundColor="#B3382C" style={styles.modalBtn}>Ok</Button>}
                </div>
            </div>
        </>
    );
}

export default memo(Modal);
