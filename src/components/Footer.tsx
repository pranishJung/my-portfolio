import React from 'react';
import styles from '../styles/Footer.module.css';

const Footer: React.FC = () => {
  return (
    <footer className={styles.footer}>
      <p>© {new Date().getFullYear()} Pranish. All rights reserved.</p>
    </footer>
  );
};

export default Footer;