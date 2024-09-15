import React from 'react';
import { Link } from 'react-scroll';
import styles from '../styles/Navbar.module.css';

const Navbar: React.FC = () => {
  return (
    <nav className={styles.navbar}>
      <ul>
        <li>
          <Link to="home" smooth={true} duration={500}>Home</Link>
        </li>
        <li>
          <Link to="projects" smooth={true} duration={500}>Projects</Link>
        </li>
        <li>
          <Link to="skills" smooth={true} duration={500}>Skills</Link>
        </li>
        <li>
          <Link to="contact" smooth={true} duration={500}>Contact</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
