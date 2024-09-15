import React from 'react';
import styles from '../styles/Skills.module.css';

const skills = [
  { name: 'React', icon: '⚛️' },
  { name: 'TypeScript', icon: '📜' },
  { name: 'JavaScript', icon: '💻' },
  { name: 'Node.js', icon: '🌐' },
  { name: 'CSS', icon: '🎨' },
  { name: 'AWS', icon: '☁️' },
  { name: 'Docker', icon: '🐳' },
  { name: 'Spring Boot', icon: '🌱' }
];

const Skills: React.FC = () => {
  return (
    <div className={styles.skillsSection}>
      <h2 className={styles.heading}>Skills</h2>
      <div className={styles.skillsGrid}>
        {skills.map((skill, index) => (
          <div key={index} className={styles.skillCard}>
            <div className={styles.icon}>{skill.icon}</div>
            <p className={styles.skillName}>{skill.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skills;
