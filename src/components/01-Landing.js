import React from 'react';
import landingStyle from './01-landing.module.scss';

const Landing = () => {
  return (
    <div className={landingStyle.landing}>
      <h1>J <span>Lincoln</span> Dennis</h1>
      <ul>
        <li>About</li>
        <li>Experience</li>
        <li>Projects</li>
        <li>Contact</li>
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
