import React from 'react';
import {
  FaGithub,
  FaLinkedin,
  FaPaperPlane,
  FaChevronUp,
} from 'react-icons/fa';
import * as styles from './sidebar.module.css';

const Sidebar = (props) => (
  <div className={styles.container}>
    <div className={styles.buttons}>
      <ul>
        <li>
          <div
            id="ProjectsNav"
            className={styles.btn}
            onClick={() => {
              props.handleNavClick('Projects');
            }}
          >
            Projects
          </div>
        </li>
        <li>
          <div
            id="ResumeNav"
            className={styles.btn}
            onClick={() => {
              props.handleNavClick('Resume');
            }}
          >
            Resume
          </div>
        </li>
        <li>
          <div
            id="AboutNav"
            className={styles.btn}
            onClick={() => {
              props.handleNavClick('About');
            }}
          >
            About
          </div>
        </li>
        <br />
        <br />
        <br />
        <li>
          <a
            href="https://github.com/BenGSchulz"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.social}
          >
            <FaGithub />
          </a>
        </li>
        <li>
          <a
            href="https://linkedin.com/in/BenGSchulz/"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.social}
          >
            <FaLinkedin />
          </a>
        </li>
        <li>
          <a
            href="mailto:benjamin.g.schulz@gmail.com"
            className={styles.social}
          >
            <FaPaperPlane />
          </a>
        </li>
      </ul>
    </div>
    <p
      className={styles.toTopBtn}
      onClick={() => {
        props.handleNavClick('Projects');
      }}
    >
      <FaChevronUp />
    </p>
  </div>
);

export default Sidebar;
