import React, { memo } from "react";
import { useSelector } from "react-redux";
import styles from './CartContainer.module.scss';
import CartItem from "../CartItem/CartItem";
import AuthForm from "../AuthForm/AuthForm";

function CartContainer() {
    const cartData = useSelector((state) => state.cart.inCart);
    return (
        <>
            <section className={styles.cardContainer}>
                {cartData ? cartData.map((item) => <CartItem key={item.id} itemContent={item} />) : <h1>No cart items here</h1>}
                {cartData && Object.keys(cartData).length === 0 && <h1>No cart items here</h1>}
            </section>
            {cartData && Object.keys(cartData).length !== 0 && <AuthForm />}
        </>
    );
}

export default memo(CartContainer);
