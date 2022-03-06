import React, {memo} from 'react';
import styles from './Header.module.scss';
import { NavLink } from "react-router-dom";

const Header = () => {
    return (
        <header className={styles.header}>
            <nav>
                <ul className={styles.ulNavLinks}>
                    <li className={styles.navLinks}>
                        <NavLink exact className={styles.navLink} activeClassName="active" to="/">Home</NavLink>
                    </li>
                    <li className={styles.navLinks}>
                        <NavLink exact className={styles.navLink} activeClassName="active" to="/cart">Cart</NavLink>
                    </li>
                    <li className={styles.navLinks}>
                        <NavLink exact className={styles.navLink} activeClassName="active" to="/favourite">Favourite</NavLink>
                    </li>
                </ul>
            </nav>
        </header>
    );
};

export default memo(Header);
