import React from 'react';
import * as styles from './contentArea.module.css';
import CardCarousel from '../cardCarousel/cardCarousel';
import About from '../about/about';
import Resume from '../resume/resume';

const ContentArea = (props) => {
  return (
    <div id="ContentArea" className={styles.container}>
      <h1 id="AboutHeader" className={styles.sectionTitle}>
        About
      </h1>
      <About />

      <h1 id="ProjectsHeader" className={styles.sectionTitle}>
        Projects
      </h1>
      <CardCarousel />

      <h1 id="ResumeHeader" className={styles.sectionTitle}>
        Resume
      </h1>
      <Resume />
    </div>
  );
};

export default ContentArea;
