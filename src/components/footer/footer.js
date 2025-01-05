import React from 'react';
import { FaGithub, FaLinkedin, FaPaperPlane, FaFilePdf } from 'react-icons/fa';

import * as styles from './footer.module.css';

const Footer = (props) => (
  <div className={styles.container}>
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
      <a href="mailto:benjamin.g.schulz@gmail.com" className={styles.social}>
        <FaPaperPlane />
      </a>
      <a
        href="src/files/BenSchulzResume.pdf"
        download
        className={styles.social}
      >
        <FaFilePdf />
      </a>
    </div>
  </div>
);

export default Footer;
