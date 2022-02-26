import React, { useEffect, useState, memo } from "react";
import styles from './CardPageItem.module.scss';
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import Button from "../Button/Button.js";
import { ReactComponent as StarIcon } from "../../assets/svg/star-plus.svg";
import { ReactComponent as StarRemove } from "../../assets/svg/star-remove.svg";
import { addToFavourite, removeFromFavourite } from "../../store/actionCreators/favouriteAC.js";
import { setConfigModal, setIsOpenModal } from "../../store/actionCreators/modalAC.js";
import { fetchData } from "../../store/actionCreators/itemAC.js";
// import PropTypes from 'prop-types';

function CardPageItem() {
    const inFavourite = useSelector((state) => state.favourite.inFavourite);
    const cart = useSelector((state) => state.cart.inCart);
    const allItems = useSelector((state) => state.items.items);
    const [isFavourite, setIsFavourite] = useState(false);
    const [isCart, setIsCart] = useState(false);
    const [counter, setCounter] = useState(0);
    const [card, setCard] = useState(false);
    const { name, price, url, id, color } = card;
    const dispatch = useDispatch();
    const history = useHistory();
    useEffect(() => {
        dispatch(fetchData());
        const paramsString = document.location.pathname;
        const words = paramsString.split(":");
        allItems.forEach((item) => {
            if (item.id === words[1]) {
                setCard(item);
            }
        })
        if (inFavourite) {
            inFavourite.forEach(item => {
                // if (item.id === id) {
                if (item.id === words[1]) {
                    return setIsFavourite(true);
                }
            })
        }
        if (cart) {
            cart.forEach(item => {
                // if (item.id === id) {
                if (item.id === words[1]) {
                    return setIsCart(true);
                }
            })
        }
    }, []);
    useEffect(() => {
        setCounter(prevCount => prevCount+=1);
        // console.log(isCart);
        // console.log(counter);
        if (counter !== 0) {
            setIsCart(prevState => !prevState);
        }
    }, [cart]);
    const addToFav = (id) => {
        dispatch(addToFavourite(id));
        setIsFavourite(true);
    }
    const removeFromFav = (id) => {
        dispatch(removeFromFavourite(id));
        setIsFavourite(false);
    }
    const openModal = () => {
        // setIsCart(prevState => !prevState);
        dispatch(setIsOpenModal(true));
        dispatch(setConfigModal({ id, title: "Add to cart?", body: "Are you sure you want to add this item to your shopping cart?" }))
    }
    const openDeleteModal = () => {
        // setIsCart(prevState => !prevState);
        dispatch(setIsOpenModal(true));
        dispatch(setConfigModal({ id, toggleAddRemoveItem: true, title: "Delete from cart?", body: "Are you sure you want to delete this item from your shopping cart?" }))
    }
    const changeItemColor = (elem) => {
        const allColors = document.getElementsByClassName(styles.customColor);
        // console.log(allColors);
        if (allColors.length > 0) {
            allColors[0].classList.remove(styles.customColor);
        }
        elem.target.classList.add(styles.customColor);
    }
    return (
        <>
            <div id={id} class={styles.productItem}>
                <div class={styles.productImgDiv}>
                    <img class={styles.productImg} src={url} />
                </div>
                <div class={styles.productIist}>
                    <div class={styles.goBack}>
                        <Button handleClick={() => history.goBack()}>Go Back</Button>
                    </div>
                    <div className={styles.favourites}>
                        <p class={styles.productName}>{name}</p>
                        {isFavourite ? <StarRemove class={styles.star} onClick={() => removeFromFav(id)} /> : <StarIcon class={styles.star} onClick={() => addToFav(id)} />}
                    </div>
                    <div class={styles.productDescr}>
                        <p class={styles.color}>Color {color}:</p>
                        <div class={styles.changeColor}>
                        <div onClick={changeItemColor}class={styles.colors} style={{ backgroundColor: color }}></div>
                        <div onClick={changeItemColor}class={styles.colors} style={{ backgroundColor: "blue" }}></div>
                        <div onClick={changeItemColor}class={styles.colors} style={{ backgroundColor: "green" }}></div>
                        </div>
                        <div class={styles.priceCart}>
                            <p class={styles.price}>{price}</p>
                            <div class={styles.addToCart}>
                                {isCart ? <Button handleClick={() => { openDeleteModal() }}>Delete From Shopping Cart</Button> : <Button handleClick={() => { openModal() }}>Add to Shopping Cart</Button>}
                                {/* {isCart ? <Button handleClick={() => { openModal() }}>Add to Shopping Cart</Button> : <Button handleClick={() => { openDeleteModal() }}>Delete From Shopping Cart</Button>} */}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}





export default memo(CardPageItem);