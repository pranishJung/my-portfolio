import React from 'react';
import { motion } from 'framer-motion';
import styles from '../styles/Home.module.css';
import Clock from './Clock';

const Home: React.FC = () => {
  return (
    <div className={styles.home}>
      {/* Hero Section with Animations */}
      <motion.section
        className={styles.hero}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.5 }}
      >
        <h1>Hi, I'm Pranish</h1>
        <p>A software engineer with a passion for creating great experiences.</p>
      </motion.section>

      {/* Sections */}
      <motion.section
        className={styles.sections}
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.5, delay: 0.5 }}
      >
        <div className={styles.section}>
          <h2>Projects</h2>
          <p>Check out some of my recent work.</p>
        </div>
        <div className={styles.section}>
          <h2>Skills</h2>
          <p>I'm proficient in JavaScript, React, TypeScript, and more.</p>
        </div>
        <div className={styles.section}>
          <h2>Contact</h2>
          <p>Get in touch with me!</p>
        </div>
      </motion.section>
      <Clock />
    </div>
  );
};

export default Home;