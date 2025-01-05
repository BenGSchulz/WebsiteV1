import { graphql, useStaticQuery } from 'gatsby';
import React, { useCallback, useRef, useState } from 'react';
import DetailedProjectCard from '../detailedProjectCard/detailedProjectCard';
import ProjectCard from '../projectCard/projectCard';
import * as styles from './cardCarousel.module.css';

const CardCarousel = (props) => {
  const data = useStaticQuery(graphql`
    query {
      allMarkdownRemark {
        edges {
          node {
            id
            frontmatter {
              title
              link1
              link2
              previewImage
            }
            html
          }
        }
      }
    }
  `);

  const [clickedCardIndex, setClickedCardIndex] = useState(-1);
  const [showDetailCard, setShowDetailCard] = useState(false);
  const [detailData, setDetailData] = useState(null);

  const container = useRef(null);

  const handleCardClick = useCallback((inData, cardIndex) => {
    setClickedCardIndex(cardIndex);
    setDetailData(inData);
    setShowDetailCard(true);
  }, []);

  const handleDetailCardClose = useCallback(() => {
    setClickedCardIndex(-1);
    setShowDetailCard(false);
  }, []);

  return (
    <div id="Projects" ref={container} className={styles.container}>
      {data.allMarkdownRemark.edges.map(({ node }, i) => {
        let clicked = i === clickedCardIndex ? true : false;
        return (
          <ProjectCard
            key={node.id}
            index={i}
            content={node}
            clicked={clicked}
            handleClick={handleCardClick}
          />
        );
      })}

      {showDetailCard && (
        <DetailedProjectCard
          content={detailData}
          handleClose={handleDetailCardClose}
        />
      )}
    </div>
  );
};

export default CardCarousel;
