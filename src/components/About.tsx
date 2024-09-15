import React from 'react';
import styles from '../styles/About.module.css';

const About: React.FC = () => {
  return (
    <section className={styles.aboutContainer}>
      <h2>About Me</h2>
      <p>
        I am a software engineer with experience in developing web applications
        and a passion for creating efficient and scalable solutions.
      </p>
    </section>
  );
};

export default About;