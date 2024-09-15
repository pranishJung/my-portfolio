import React, { useEffect, useState } from 'react';
import styles from '../styles/SkillBubble.module.css';

interface SkillBubbleProps {
  skill: string;
}

const getRandomPosition = () => {
  const top = Math.floor(Math.random() * 90) + '%';
  const left = Math.floor(Math.random() * 90) + '%';
  return { top, left };
};

const getRandomAnimationDuration = () => {
  // Random duration between 8s and 15s
  return Math.floor(Math.random() * (15 - 8 + 1)) + 8 + 's';
};

const SkillBubble: React.FC<SkillBubbleProps> = ({ skill }) => {
  const [position, setPosition] = useState({ top: '0%', left: '0%' });
  const [animationDuration, setAnimationDuration] = useState('10s');

  useEffect(() => {
    const newPosition = getRandomPosition();
    setPosition(newPosition);
    const newDuration = getRandomAnimationDuration();
    setAnimationDuration(newDuration);
  }, []);

  return (
    <div
      className={styles.bubble}
      style={{ ...position, animationDuration }}
    >
      {skill}
    </div>
  );
};

export default SkillBubble;
