import React, {memo} from 'react';
import styles from './Footer.module.scss';

const Footer = () => {
        return (
              <footer className={styles.footer}>
                  <p className={styles.footerText}>Musica @2013 by PremiumCoding | All Rights Reserved</p>
              </footer>
        );
};

export default memo(Footer);