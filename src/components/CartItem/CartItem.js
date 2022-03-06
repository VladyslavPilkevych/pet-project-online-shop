import React, { memo } from "react";
import styles from './CartItem.module.scss';
import Button from "../Button/Button";
import PropTypes from 'prop-types';
import { useDispatch } from "react-redux";
import { setConfigModal, setIsOpenModal } from "../../store/actionCreators/modalAC";
import { Link } from "react-router-dom";

function CartItem(props) {
    const { itemContent: { name, price, url, id, color } } = props;
    const dispatch = useDispatch();
    const openModal = () => {
        dispatch(setIsOpenModal(true));
        dispatch(setConfigModal({ id, toggleAddRemoveItem: true, title: "Delete from cart?", body: "Are you sure you want to delete this item from your shopping cart?" }))
    }
    return (
        <>
            <div id={id} class={styles.productItem}>
                <div class={styles.productImg}>
                    <Link to={`/card:${id}`}><img src={url} /></Link>
                </div>
                <div class={styles.productIist}>
                    <h3>{name}</h3>
                    <div class={styles.stars}></div>
                    <span class={styles.price}>{price}</span>
                    <p class={styles.colorContainer}>Cover color:
                        {color && color.map(item => {
                            return <div key={Math.random()} class={styles.colors} style={{ backgroundColor: item }}></div>
                        })}
                    </p>
                    <div class={styles.actions}>
                        <div class={styles.addToCart}>
                            <Button handleClick={() => { openModal() }}>Delete From Shopping Cart</Button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

CartItem.propTypes = {
    itemContent: PropTypes.object.isRequired,
    name: PropTypes.string,
    price: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.number
    ]),
    url: PropTypes.string,
    id: PropTypes.number,
    color: PropTypes.string,
}

CartItem.defaultProps = {
    name: '',
    price: 0,
    url: '',
    id: null,
    color: '',
}

export default memo(CartItem);