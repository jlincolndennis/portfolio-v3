import React from "react"

import Landing from '../components/Landing';
import About from '../components/About';
import Experience from '../components/Experience';
import Projects from '../components/Projects';
import Contact from '../components/Contact';
import Colophon from '../components/Colophon';

export default () => {
  return (
    <div>
      <Landing />
      <About />
      <Experience />
      <Projects />
      <Contact />
      <Colophon />
    </div>
  )
}
