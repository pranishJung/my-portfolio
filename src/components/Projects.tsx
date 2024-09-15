import React from 'react';
import styles from '../styles/Projects.module.css';

const projects = [
  { title: 'Project One', description: 'Description of project one.', link: '#' },
  { title: 'Project Two', description: 'Description of project two.', link: '#' },
  // Add more projects as needed
];

const Projects: React.FC = () => {
  return (
    <section className={styles.projectsContainer}>
      <h2>Projects</h2>
      <div className={styles.projectList}>
        {projects.map((project, index) => (
          <div key={index} className={styles.projectCard}>
            <h3>{project.title}</h3>
            <p>{project.description}</p>
            <a href={project.link} target="_blank" rel="noopener noreferrer">View Project</a>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;