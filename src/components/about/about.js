import React from 'react';
import * as styles from './about.module.css';
import TextLooper from '../textLooper/textLooper';
// import AboutCard from "./aboutCard/aboutCard"

const About = (props) => {
  return (
    <div id="About" className={styles.container}>
      <div className={styles.text}>
        I'm a software developer passionate about creating stimulating digital
        interactions and platforms. I love bringing ideas to life on a screen
        and I'm excited to build my career doing it. My proficiency lies in
        crafting front-end experiences using JS/HTML/CSS and React. I'm also
        experienced in full-stack development using noSQL databases and Node.js.
        I make games with Unity and Unreal Engine too. When I'm not working on
        software or learning new tools for it, I'm gathering inspiration from:{' '}
        <TextLooper title="the outdoors" speed={700}>
          <span>the outdoors</span>
          <span>biking</span>
          <span>hiking</span>
          <span>skiing</span>
          <span>skating</span>
          <span>running</span>
          <span>climbing</span>
        </TextLooper>
        {', '}
        <TextLooper title="books" speed={700}>
          <span>books</span>
          <span>McCarthy</span>
          <span>Tolkein</span>
          <span>Murakami</span>
          <span>Dostoevsky</span>
          <span>Heinlein</span>
          <span>P.K.Dick</span>
          <span>Clarke</span>
        </TextLooper>
        {', '}
        <TextLooper title="music" speed={700}>
          <span>music</span>
          <span>KGATLW</span>
          <span>IC3PEAK</span>
          <span>Sigur Ros</span>
          <span>Drain Gang</span>
          <span>Dylan Brady</span>
          <span>Sesh</span>
        </TextLooper>
        {', '}
        <TextLooper title="film & TV" speed={700}>
          <span>film & TV</span>
          <span>Villeneuve</span>
          <span>Anderson</span>
          <span>Kubrick</span>
          <span>Lanthimos</span>
          <span>Jonze</span>
          <span>Lynch</span>
          <span>Kurosawa</span>
          <span>Leone</span>
          <span>Tarantino</span>
          <span>Scott</span>
          <span>Gilligan</span>
        </TextLooper>
        {', '}
        <TextLooper title="everything else" speed={700}>
          <span>everything else</span>
          <span>travel</span>
          <span>languages</span>
          <span>education</span>
          <span>podcasts</span>
          <span>visual arts</span>
          <span>architecture</span>
          <span>product design</span>
          <span>woodworking</span>
          <span>fabrication</span>
          <span>philosophy</span>
        </TextLooper>
        {'.'}
      </div>
      {/* <div className={styles.cards}>
        <AboutCard title="Outdoors" content="Running Biking Skiing Hiking Climbing Lakes Running Biking Skiing Hiking Climbing Lakes Running Biking Skiing Hiking Climbing Lakes" />
        <AboutCard title="Books" content="Blood Meridian    Kafka on the Shore  " />
        <AboutCard title="Music" content="On Shuffle" />
        <AboutCard title="Film & TV" content="Currently: X-Files" />
      </div> */}
    </div>
  );
};

export default About;
