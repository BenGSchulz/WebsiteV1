import React, { useState } from 'react';
import * as styles from './aboutCard.module.css';

const AboutCard = (props) => {
  const [hovering, setHovering] = useState(false);
  const [clicked, setClicked] = useState(false);

  let words = props.content.split(' ');

  const handleHover = () => {
    setHovering(!hovering);
  };

  const handleClick = () => {
    setClicked(!clicked);
  };

  return (
    <div
      className={styles.container}
      onMouseEnter={handleHover}
      onMouseLeave={handleHover}
      onClick={handleClick}
    >
      {hovering || clicked ? (
        <div className={styles.text}>{props.content}</div>
      ) : (
        <div className={styles.title}>{props.title}</div>
      )}
    </div>
  );
};

export default AboutCard;
