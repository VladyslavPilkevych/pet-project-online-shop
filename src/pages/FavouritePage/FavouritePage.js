import React, {memo} from "react";
import FavouriteContainer from "../../components/FavouriteContainer/FavouriteContainer"

const FavouritePage = () => {
    return (
        <section>
            <h1>Favourite:</h1>
            <FavouriteContainer/>
        </section>
    )
}

export default memo(FavouritePage);