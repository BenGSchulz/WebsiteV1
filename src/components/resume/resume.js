import React, { useRef } from 'react';
import { FaFileDownload } from 'react-icons/fa';
import pdf from '../../files/resume.pdf';
import * as styles from './resume.module.css';

const Resume = (props) => {
  const container = useRef(null);

  return (
    <div id="Resume" ref={container} className={styles.container}>
      <a href={pdf} download="BenSchulzResume">
        <div className={styles.download}>
          <FaFileDownload />
        </div>
      </a>
      <div className={styles.section}>
        <div className={styles.sectionHeader}>Education</div>
        <div className={styles.blockHeader}>
          <span>University of Denver</span>
          <span>Sep. 2015 - Mar. 2019</span>
        </div>
        <ul className={styles.educationBody}>
          <li>B.S. Computer Science - 3.9 GPA</li>
          <li>Minors: Emergent Digital Practices, Mathematics</li>
          <li>Deans List and Hornbeck Scholar</li>
          <li>Outstanding First year Writing Award</li>
        </ul>
      </div>
      <div className={styles.section}>
        <div className={styles.sectionHeader}>Experience</div>
        <div className={styles.blockHeader}>
          <span>
            Software Developer - <a href={'http://spotpost.com'}>Spotpost</a>
          </span>
          <span>Feb. 2019 - current</span>
        </div>
        Denver, CO / Remote
        <ul className={styles.experienceBody}>
          <li>
            Collaborated with cross-functional team to build a new product from
            the ground up.
          </li>
          <li>
            Implemented front-end presentation and interactions with React and
            designed RESTful API services.
          </li>
          <li>
            Conceptualized new product features and process optimizations for
            the engineering team.
          </li>
        </ul>
        <div className={styles.blockHeader}>
          <span>
            Creative Coding Elective Teacher - <i>DSST Public Schools</i>
          </span>
          <span>Aug. - Nov. 2018</span>
        </div>
        Denver, CO
        <ul className={styles.experienceBody}>
          <li>
            Designed and organized a trimester curriculum centered around
            creative coding and basic CS fundamentals using OpenProcessing/p5.js
            : <a href="openprocessing.org/class/58336">class page</a>
          </li>
          <li>
            Cultivated interest in my passion to use coding for creative
            expression and human-computer interaction.
          </li>
          <li>
            Evolved interpersonal and leadership skills through instruction and
            collaboration with 38 students, grades 9 - 11.
          </li>
        </ul>
      </div>
      <div className={styles.section}>
        <div className={styles.sectionHeader}>Skills</div>
        <table className={styles.fullTable}>
          <tbody>
            <tr>
              <th>Languages:</th>
              <td>JavaScript</td>
              <td>HTML/CSS</td>
              <td>C#</td>
              <td>C++</td>
            </tr>
            <tr>
              <td />
              <td>Java</td>
              <td>Racket</td>
              <td>Haskell</td>
            </tr>
            <tr />
            <tr>
              <th>Tools+Libraries+Frameworks:</th>
              <td>React</td>
              <td>AngularJS</td>
              <td>MongoDB/Mongoose</td>
              <td>Node.js/Express</td>
            </tr>
            <tr>
              <td />
              <td>Git/GitHub</td>
              <td>Jest/Enzyme</td>
              <td>Unity3D</td>
              <td>Unreal Engine 4</td>
            </tr>
            <tr>
              <td />
              <td>Maya</td>
              <td>Affinity Photo/Design</td>
            </tr>
          </tbody>
        </table>
        <table className={styles.mobileTable}>
          <tbody>
            <tr>
              <th colSpan={2}>Languages:</th>
            </tr>
            <tr>
              <td>JavaScript</td>
              <td>HTML/CSS</td>
              <td>C#</td>
              <td>C++</td>
            </tr>
            <tr>
              <td>Java</td>
              <td>Racket</td>
              <td>Haskell</td>
            </tr>
          </tbody>
        </table>
        <table className={styles.mobileTable}>
          <tbody>
            <tr>
              <th colSpan={3}>Tools+Libraries+Frameworks:</th>
            </tr>
            <tr>
              <td>React</td>
              <td>AngularJS</td>
              <td>MongoDB/ Mongoose</td>
            </tr>
            <tr>
              <td>Node.js/ Express</td>
              <td>Git/ GitHub</td>
              <td>Jest/ Enzyme</td>
            </tr>
            <tr>
              <td>Unity3D</td>
              <td>Unreal Engine 4</td>
              <td>Maya</td>
            </tr>
            <tr>
              <td>Affinity Photo/Design</td>
            </tr>
          </tbody>
        </table>
      </div>
      <div className={styles.section}>
        <div className={styles.sectionHeader}>Activities</div>
        <div className={styles.blockHeader}>
          <span>
            Treasurer - <i>Japan Bunka Kai</i>
          </span>
          <span>Sep. 2016 - Mar. 2019</span>
        </div>
        Increased campus awareness of and engagement in Japanese cultural and
        language events by managing funds for student organized events.
      </div>
    </div>
  );
};

export default Resume;
