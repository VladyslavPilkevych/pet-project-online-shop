import React, {memo} from "react";
import {useSelector} from "react-redux";
import styles from './FavouriteContainer.module.scss';
import FavouriteItem from "../FavouriteItem/FavouriteItem.js";

function FavouriteContainer() {
    const favouriteData = useSelector((state)=>state.favourite.inFavourite)
    // console.log(favouriteData);
    return (
        <>
            <section className={styles.cardContainer}>
                {favouriteData ? favouriteData.map((item) => <FavouriteItem key={item.id} itemContent={item} />) : <h1>No favourite items here</h1> }
                {/* {favouriteData && favouriteData.map((item) => <FavouriteItem key={item.id} itemContent={item} />)} */}
                {favouriteData && Object.keys(favouriteData).length === 0 && <h1>No favourite items here</h1>}
            </section>
        </>
    );
}

export default memo(FavouriteContainer);
