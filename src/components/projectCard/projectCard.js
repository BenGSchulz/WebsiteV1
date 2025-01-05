import React, { useRef } from 'react';

import * as styles from './projectCard.module.css';

const ProjectCard = (props) => {
  const myClass = props.clicked
    ? [styles.card, styles.cardClicked].join(' ')
    : styles.card;

  const thisRef = useRef(null);

  const handleClick = () => {
    if (thisRef.current) {
      let thisCard = {
        ...props.content,
        cardRect: thisRef.current.getBoundingClientRect(),
      };
      props.handleClick(thisCard, props.index);
    }
  };

  return (
    <div
      ref={thisRef}
      className={myClass}
      onClick={handleClick}
      style={{
        backgroundImage: `url(${props.content.frontmatter.previewImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <h3 className={styles.cardTitle}>{props.content.frontmatter.title}</h3>
      {/* eslint-disable-next-line  */}
      {/* <img src={props.content.frontmatter.previewImage} alt='Preview Image' className={styles.preview} /> */}
      <a
        href={props.content.frontmatter.link1}
        className={[styles.link, styles.left].join(' ')}
        onClick={(e) => {
          e.stopPropagation();
        }}
        target="_blank"
        rel="noopener noreferrer"
      >
        GitHub
      </a>
      <a
        href={props.content.frontmatter.link2}
        className={[styles.link, styles.right].join(' ')}
        onClick={(e) => {
          e.stopPropagation();
        }}
        target="_blank"
        rel="noopener noreferrer"
      >
        Website
      </a>
    </div>
  );
};

export default ProjectCard;
