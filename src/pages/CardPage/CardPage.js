import React, {memo} from "react";
import CardPageItem from "../../components/CardPageItem/CardPageItem.js";


const CardPage = () => {
    return (
        <section>
            {/* <h1>Card:</h1> */}
            <CardPageItem />
        </section>
    )
}

export default memo(CardPage);