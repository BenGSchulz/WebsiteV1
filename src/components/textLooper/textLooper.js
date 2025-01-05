import React, { useState, useEffect, useRef } from 'react';
import * as styles from './textLooper.module.css';
import TextLoop from 'react-text-loop';

const TextLooper = (props) => {
  const thisRef = useRef(null);

  const [hovering, setHovering] = useState(false);
  const [clicked, setClicked] = useState(false);
  const [hasTouchScreen, setHasTouchScreen] = useState(false);

  let UA = '';

  useEffect(() => {
    UA = navigator.userAgent;
    setHasTouchScreen(
      /\b(BlackBerry|webOS|iPhone|IEMobile)\b/i.test(UA) ||
        /\b(Android|Windows Phone|iPad|iPod)\b/i.test(UA)
    );
  }, []);

  const handleHover = () => {
    setHovering(!hovering);
  };

  const handleClick = () => {
    console.log(clicked);

    clicked
      ? thisRef.current.classList.remove(styles.mobileHover)
      : thisRef.current.classList.add(styles.mobileHover);

    setClicked(!clicked);
  };

  if (hasTouchScreen) {
    return (
      <span
        ref={thisRef}
        className={styles.mobileWrapper}
        onClick={handleClick}
      >
        {clicked ? (
          <TextLoop interval={props.speed} adjustingSpeed={0} mask>
            {props.children}
          </TextLoop>
        ) : (
          props.title
        )}
        {/* <TextLoop interval={props.speed} adjustingSpeed={0} mask>
        {hovering ? props.children : props.title}
      </TextLoop> */}
      </span>
    );
  } else {
    return (
      <span
        className={styles.wrapper}
        onMouseEnter={handleHover}
        onMouseLeave={handleHover}
      >
        {hovering ? (
          <TextLoop interval={props.speed} adjustingSpeed={0} mask>
            {props.children}
          </TextLoop>
        ) : (
          props.title
        )}
        {/* <TextLoop interval={props.speed} adjustingSpeed={0} mask>
        {hovering ? props.children : props.title}
      </TextLoop> */}
      </span>
    );
  }
};

export default TextLooper;
