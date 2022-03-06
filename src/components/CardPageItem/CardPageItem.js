import React, { useEffect, useState, memo, PureComponent } from "react";
import styles from './CardPageItem.module.scss';
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import Button from "../Button/Button.js";
import { ReactComponent as StarIcon } from "../../assets/svg/star-plus.svg";
import { ReactComponent as StarRemove } from "../../assets/svg/star-remove.svg";
import { addToFavourite, removeFromFavourite } from "../../store/actionCreators/favouriteAC";
import { setConfigModal, setIsOpenModal } from "../../store/actionCreators/modalAC";
import ImageGallery from 'react-image-gallery';
import { setIsLoading } from "../../store/actionCreators/preloaderAC";
import Preloader from "../Preloader/Preloader";

function CardPageItem() {
    const isLoading = useSelector(state => state.loader.isLoading);
    const inFavourite = useSelector((state) => state.favourite.inFavourite);
    const cart = useSelector((state) => state.cart.inCart);
    const allItems = useSelector((state) => state.items.items);
    const [isFavourite, setIsFavourite] = useState(false);
    const [isCart, setIsCart] = useState(false);
    const [counter, setCounter] = useState(0);
    const [card, setCard] = useState(false);
    const [buttonDis, setButtonDis] = useState(true);
    const [elemColor, setElemColor] = useState(null);
    const { name, price, url, id, color, img: images } = card;
    const dispatch = useDispatch();
    const history = useHistory();
    useEffect(() => {
        dispatch(setIsLoading(true));
        const paramsString = document.location.pathname;
        const words = paramsString.split(":");
        setTimeout(() => {
            allItems.forEach((item) => {
                if (item.id === words[1]) {
                    setCard(item);
                    dispatch(setIsLoading(false));
                }
            })
        }, 1500);
        if (inFavourite) {
            inFavourite.forEach(item => {
                if (item.id === words[1]) {
                    return setIsFavourite(true);
                }
            })
        }
        if (cart) {
            cart.forEach(item => {
                if (item.id === words[1]) {
                    return setIsCart(true);
                }
            })
        }
        if (elemColor) {
            document.getElementById(elemColor).classList.add(styles.customColor);
        }
    }, []);
    useEffect(() => {
        setCounter(prevCount => prevCount += 1);
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
        dispatch(setIsOpenModal(true));
        dispatch(setConfigModal({ id, title: "Add to cart?", body: "Are you sure you want to add this item to your shopping cart?" }))
    }
    const openDeleteModal = () => {
        dispatch(setIsOpenModal(true));
        dispatch(setConfigModal({ id, toggleAddRemoveItem: true, title: "Delete from cart?", body: "Are you sure you want to delete this item from your shopping cart?" }))
    }
    const changeItemColor = (elem) => {
        const allColors = document.getElementsByClassName(styles.customColor);
        if (allColors.length === 1) {
            allColors[0].classList.remove(styles.customColor);
            elem.target.classList.add(styles.customColor);
            console.log("NOT first touch");
        } else {
            console.log("first touch");
            elem.target.classList.add(styles.customColor);
        }
        elem.target.classList.add(styles.customColor);
        console.log("change style");
        setElemColor(elem.target.id);
        setButtonDis(false);
    }
    return (
        <section className={styles.itemPage}>
            {isLoading ? <Preloader /> :
                <div id={id} class={styles.productItem}>
                    <div class={styles.productImgDiv}>
                        {images &&
                            <ImageGallery items={images} showPlayButton={false} thumbnailPosition="right" />
                        }
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
                            <p class={styles.color}>Color:</p>
                            <div class={styles.changeColor}>
                                {color && color.map(item => {
                                    return <div key={item} id={item} onClick={changeItemColor} class={styles.colors} style={{ backgroundColor: item }}></div>
                                })}
                            </div>
                            <div class={styles.priceCart}>
                                <p class={styles.price}>{price}</p>
                                <div class={styles.addToCart}>
                                    {isCart ? <Button handleClick={() => { openDeleteModal() }}>Delete From Shopping Cart</Button>
                                        : <Button disabledButton={buttonDis} handleClick={() => { openModal() }}>Add to Shopping Cart</Button>}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            }
        </section>
    )
}

export default memo(CardPageItem);