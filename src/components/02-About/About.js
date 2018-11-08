import React from 'react';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import aboutStyle from './about.module.scss';

const About = () => {
  return (
    <div id="about" className={aboutStyle.about}>
      <div className={aboutStyle.skills}>
        <h1>Full Stack Web Development</h1>
        <div className={aboutStyle.wrapper}>
          <div className={aboutStyle.col}>
            <p>JavaScript(ES6)</p>
            <p>HTML5</p>
            <p>CSS/SASS</p>
            <p>Git/GitHub</p>
          </div>
          <div className={aboutStyle.col}>
            <p>Vue.js/Nuxt.js</p>
            <p>AngularJS</p>
            <p>React/Redux</p>
            <p>Node.js</p>
          </div>
          <div className={aboutStyle.col}>
            <p>Google Maps API</p>
            <p>GraphQL</p>
            <p>SQL</p>
          </div>
        </div>
        <h3>Let's build something together. <AnchorLink offset='150' href="#contact">Contact me</AnchorLink> today.</h3>
      </div>

      <div className={aboutStyle.bio}>
        <h2>About the Author</h2>
        <p>
          I received my Web Development Merit Badge from the Full Stack Immersive
          Program at <a href="https://www.galvanize.com/boulder/campus">Galvanize Boulder</a> in July 2016. Additionally, I have a background
          in theater, education, and English (via a BFA from the University of Northern
            Colorado). I'm also really good at those claw machines filled with
            stuffed animals you often find in bowling alleys.
          </p>
      </div>

    </div>
  )
}

export default About;
