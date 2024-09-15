import React from 'react';
import { FaLinkedin, FaGithub, FaTwitter } from 'react-icons/fa';
import styles from '../styles/Contact.module.css';

const Contact: React.FC = () => {
  return (
    <div className={styles.contactSection}>
      <div className={styles.overlay}>
        <h2 className={styles.heading}>Get In Touch</h2>
        <p className={styles.subtext}>I'd love to hear from you. Fill out the form or find me on social media.</p>
        <form className={styles.contactForm}>
          <input type="text" id="name" name="name" placeholder="Your Name" required />
          <input type="email" id="email" name="email" placeholder="Your Email" required />
          <textarea id="message" name="message" rows={4} placeholder="Your Message" required></textarea>
          <button type="submit" className={styles.submitButton}>Send Message</button>
        </form>
        <div className={styles.socialLinks}>
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
            <FaLinkedin className={styles.icon} />
          </a>
          <a href="https://github.com" target="_blank" rel="noopener noreferrer">
            <FaGithub className={styles.icon} />
          </a>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
            <FaTwitter className={styles.icon} />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Contact;
