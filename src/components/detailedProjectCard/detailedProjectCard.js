import React, { useState, useRef, useEffect } from 'react';
import { Transition } from 'react-transition-group';
import { FaTimes } from 'react-icons/fa';

import * as styles from './detailedProjectCard.module.css';

const defaultBGStyle = {
  position: 'fixed',
  width: '100vw',
  height: '100vh',
  top: 0,
  left: 0,
  background: 'black',
  opacity: 0.7,
  cursor: 'zoom-out',
  transition: 'opacity .5s',
  zIndex: 1500,
};

const bgTransitionStyles = {
  entering: {
    opacity: 0,
  },
  entered: {
    opacity: 0.7,
  },
  exiting: {
    opacity: 0.7,
  },
  exited: {
    opacity: 0,
  },
};

const defaultCardStyle = {
  position: 'fixed',
  border: '1px solid #f2f2f2',
  borderRadius: 5,
  background: '#101213',
  textAlign: 'center',
  userSelect: 'none',
  boxSizing: 'border-box',
  opacity: 1,
  transition: 'all .5s',
  zIndex: 2000,
};

let showConditional = false;

const DetailedProjectCard = (props) => {
  const cardRef = useRef(null);

  const [inProp, setInProp] = useState(true);

  const cardTransitionStyles = {
    entering: {
      width: props.content.cardRect.width,
      height: props.content.cardRect.height,
      top: props.content.cardRect.top,
      left: props.content.cardRect.left,
      opacity: 0,
    },
    entered: {
      width: '90vw',
      height: '90vh',
      top: '5vh',
      left: '5vw',
      opacity: 1,
    },
    exiting: {
      width: '90vw',
      height: '90vh',
      top: '5vh',
      left: '5vw',
      opacity: 1,
    },
    exited: {
      width: props.content.cardRect.width,
      height: props.content.cardRect.height,
      top: props.content.cardRect.top,
      left: props.content.cardRect.left,
      opacity: 0,
    },
  };

  const handleBackgroundClick = () => {
    setInProp(false);
  };

  const handleTransitionEnd = (node, end) => {
    if (inProp) {
      showConditional = true;
    } else {
      if (node) {
        node.addEventListener('transitionend', end, false);
      }
    }
  };

  useEffect(() => {
    function handleEscapeKey(event) {
      if (event.code === 'Escape') {
        handleBackgroundClick();
      }
    }

    document.addEventListener('keydown', handleEscapeKey);
    return () => document.removeEventListener('keydown', handleEscapeKey);
  }, []);

  return (
    <Transition
      appear
      in={inProp}
      timeout={0}
      addEndListener={() => {
        handleTransitionEnd(cardRef.current, props.handleClose);
      }}
    >
      {(state) => (
        <div>
          <div
            style={{ ...defaultBGStyle, ...bgTransitionStyles[state] }}
            onClick={handleBackgroundClick}
          />
          <div
            ref={cardRef}
            style={{ ...defaultCardStyle, ...cardTransitionStyles[state] }}
          >
            <h3 className={styles.cardTitle}>
              {props.content.frontmatter.title}
            </h3>
            {showConditional ? (
              <div>
                <p className={styles.closeBtn} onClick={handleBackgroundClick}>
                  <FaTimes />
                </p>
                <div
                  className={styles.detailContainer}
                  dangerouslySetInnerHTML={{ __html: props.content.html }}
                />
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
            ) : null}
          </div>
        </div>
      )}
    </Transition>
  );
};

export default DetailedProjectCard;
