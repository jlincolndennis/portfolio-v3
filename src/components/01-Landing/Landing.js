import React from 'react';
import AnchorLink from 'react-anchor-link-smooth-scroll';

import landingStyle from './landing.module.scss';

const Landing = () => {
  return (
    <div id="landing" className={landingStyle.landing}>

        <h1>J <span>Lincoln</span> Dennis</h1>
        <ul>
          <li><AnchorLink offset='95' href="#about">About</AnchorLink></li>
          <li><AnchorLink offset='95' href="#experience">Experience</AnchorLink></li>
          <li><AnchorLink offset='95' href="#projects">Projects</AnchorLink></li>
          <li><AnchorLink offset='95' href="#contact">Contact</AnchorLink></li>
        </ul>

      <div className={landingStyle.blurb}>
        <h2>Hi. I'm a web developer living in Colorado.</h2>
        <p>
          I like making things with words. I'm passionate about art, creativity,
          the future, and equality. Oh, and comic books. And cats. And lots of
          awesome things, really.
        </p>
      </div>
    </div>
  )
}

export default Landing;

// TODO: Keep line breaks by setting variable margins
