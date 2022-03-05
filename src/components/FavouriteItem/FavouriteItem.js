import React, { memo } from "react";
import styles from './FavouriteItem.module.scss';
import PropTypes from 'prop-types';
import Button from "../Button/Button.js";
import { ReactComponent as StarRemove } from "../../assets/svg/star-remove.svg";
import { removeFromFavourite } from "../../store/actionCreators/favouriteAC";
import { useDispatch } from "react-redux";
import { setConfigModal, setIsOpenModal } from "../../store/actionCreators/modalAC";
import { Link } from "react-router-dom";


function FavouriteItem(props) {
    const { itemContent, itemContent: { name, price, url, id, color } } = props;
    const dispatch = useDispatch();
    const removeFromFav = (id) => {
        dispatch(removeFromFavourite(id));
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
                                <StarRemove onClick={() => removeFromFav(id)} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

FavouriteItem.propTypes = {
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

FavouriteItem.defaultProps = {
    name: '',
    price: 0,
    url: '',
    id: null,
    color: '',
}

export default memo(FavouriteItem);