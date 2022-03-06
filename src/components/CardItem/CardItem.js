import React, { useEffect, useState, memo } from "react";
import styles from './CardItem.module.scss';
import Button from "../Button/Button";
import PropTypes from 'prop-types';
import { ReactComponent as StarIcon } from "../../assets/svg/star-plus.svg";
import { ReactComponent as StarRemove } from "../../assets/svg/star-remove.svg";
import { useDispatch, useSelector } from "react-redux";
import { addToFavourite, removeFromFavourite } from "../../store/actionCreators/favouriteAC";
import { setConfigModal, setIsOpenModal } from "../../store/actionCreators/modalAC";
import { Link } from "react-router-dom";

function CardItem(props) {
    const inFavourite = useSelector((state) => state.favourite.inFavourite);
    const { itemContent: { name, price, url, id, color } } = props;
    const [isFavourite, setIsFavourite] = useState(false);
    const dispatch = useDispatch();
    useEffect(() => {
        if (inFavourite) {
            inFavourite.forEach(item => {
                if (item.id === id) {
                    return setIsFavourite(true);
                }
            })
        }
    }, []);
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
                        {color && color.map(item =>
                            <div key={Math.random()} class={styles.colors} style={{ backgroundColor: item }}></div>
                        )}
                    </p>
                    <div class={styles.actions}>
                        <div class={styles.addToCart}>
                            <Button handleClick={() => { openModal() }}>Add to Shopping Cart</Button>
                        </div>
                        <div class={styles.addToLinks}>
                            <div className={styles.favourites}>
                                {isFavourite ? <StarRemove onClick={() => removeFromFav(id)} /> : <StarIcon onClick={() => addToFav(id)} />}
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

CardItem.propTypes = {
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

CardItem.defaultProps = {
    name: '',
    price: 0,
    url: '',
    id: null,
    color: '',
}

export default memo(CardItem);