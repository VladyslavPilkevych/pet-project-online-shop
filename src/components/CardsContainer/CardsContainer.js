import React, { useEffect, useState, memo } from "react";
import styles from './CardsContainer.module.scss';
import CardItem from "../CardItem/CardItem.js";
import PropTypes from 'prop-types';
import { useDispatch, useSelector } from "react-redux";
import { fetchData } from "../../store/actionCreators/itemAC.js";

function CardsContainer() {
    const items = useSelector(({ items }) => items.items);
    const dispatch = useDispatch();
    useEffect(() => {
            dispatch(fetchData());
    }, []);
    return (
        <>
            <section className={styles.cardContainer}>
                {items ? items.map((item) => <CardItem key={item.id} itemContent={item} />) : <h1>You don't have any items yet</h1>}
            </section>
        </>
    );
}

export default memo(CardsContainer);
