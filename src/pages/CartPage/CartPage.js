import React, {memo} from "react";
import CartContainer from "../../components/CartContainer/CartContainer";

const CartPage = () => {
    return (
        <section>
            <h1>Cart:</h1>
            <CartContainer />
        </section>
    )
}

export default memo(CartPage);