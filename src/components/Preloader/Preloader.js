import React from 'react';
import PropTypes from 'prop-types';
import styles from './Preloader.module.scss';

const Preloader = (props) => {
    const { size, borderWidth } = props;

    return (
        <>
            <div style={{ height: size * 1.5 }} className={styles.mkSpinnerWrap}>
                <div style={{ width: size, height: size, borderWidth, marginTop: -(size / 2), marginLeft: -(size / 2) }} className={styles.mkSpinnerRing} />
            </div>
        </>
    )
}

Preloader.propTypes = {
    size: PropTypes.number,
    borderWidth: PropTypes.number,
};
Preloader.defaultProps = {
    size: 50,
    borderWidth: 4,
};

export default Preloader;