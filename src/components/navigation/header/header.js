import React from 'react';
import { FaGithub, FaLinkedin, FaPaperPlane, FaFilePdf } from 'react-icons/fa';
import Dropdown from '../../dropdown/dropdown';
import * as styles from './header.module.css';
import pdf from '../../../files/resume.pdf';
const contentSections = ['About', 'Projects', 'Resume'];
const contentElements = [];

const Header = () => {
  const containerRef = React.useRef(null);
  const [currentSectionId, setCurrentSectionId] = React.useState('About');

  const handleNavClick = (id) => {
    const el = document.getElementById(id + 'Header');
    el.scrollIntoView({
      behavior: 'smooth',
    });
    // setCurrentSectionId(id);
  };

  React.useEffect(() => {
    contentElements.push(
      ...contentSections.map((section) => document.getElementById(section))
    );
    const windowIntersectionObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setCurrentSectionId(entry.target.id);
          }
        });
      },
      { rootMargin: '10px 0px -89% 0px' }
    );

    for (const el of contentElements) {
      windowIntersectionObserver.observe(el);
    }

    return () => {
      for (const el of contentElements) {
        windowIntersectionObserver.unobserve(el);
      }
    };
  }, [contentElements]);

  return (
    <div ref={containerRef} className={styles.container}>
      <div className={styles.name}>Ben Schulz:</div>
      <Dropdown
        currentSelection={currentSectionId}
        handleNavClick={handleNavClick}
        values={contentSections}
      />
      <div className={styles.socialGroup}>
        <a
          href="https://github.com/BenGSchulz"
          target="_blank"
          rel="noopener noreferrer"
          className={styles.social}
        >
          <FaGithub />
        </a>
        <a
          href="https://linkedin.com/in/BenGSchulz/"
          target="_blank"
          rel="noopener noreferrer"
          className={styles.social}
        >
          <FaLinkedin />
        </a>
        <a href="mailto:mail@benschulz.dev" className={styles.social}>
          <FaPaperPlane />
        </a>
        <a href={pdf} download="BenSchulzResume" className={styles.social}>
          <FaFilePdf />
        </a>
      </div>
    </div>
  );
};

export default Header;
