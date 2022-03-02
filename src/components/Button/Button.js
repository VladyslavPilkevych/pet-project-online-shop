import React, { useEffect, useState, memo } from "react";
import styles from './Button.module.scss';
import PropTypes from 'prop-types';

function Button(props) {
    const { children, handleClick, type, style, disabledButton } = props;
    return (
        <>
            {/* <button type={type} onClick={handleClick} className={styles.btn + " " + style}>{children}</button> */}
            {disabledButton ? <button type={type} disabled onClick={handleClick} className={styles.btn + " " + styles.btnDis + " " + style}>{children}</button>
            : <button type={type} onClick={handleClick} className={styles.btn + " " + style}>{children}</button>}
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
    style: PropTypes.string,
    disabledButton: PropTypes.bool,
}

Button.defaultProps = {
    type: 'button',
    handleClick: () => { },
    style: '',
    disabledButton: false,
}

export default memo(Button);