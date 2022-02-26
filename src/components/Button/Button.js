import React, { useEffect, useState, memo } from "react";
import styles from './Button.module.scss';
import PropTypes from 'prop-types';

function Button(props) {
    const { children, handleClick, type, style } = props;
    return ( 
        <>
            <button type={type} onClick={handleClick} className={styles.btn + " " + style}>{children}</button>
        </>
    )
}

Button.propTypes = {
    children: PropTypes.oneOfType([
        PropTypes.arrayOf(PropTypes.node),
        PropTypes.node
    ]).isRequired,
    type: PropTypes.oneOf(['submit', 'button']),
    handleClick: PropTypes.func,
    style: PropTypes.string
}

Button.defaultProps = {
    type: 'button',
    handleClick: ()=>{},
    style: '',
}

export default memo(Button);