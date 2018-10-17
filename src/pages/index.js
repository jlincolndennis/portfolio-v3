import React from "react"

import Header from '../components/00-Header';
import Landing from '../components/01-Landing';
import About from '../components/02-About';
import Experience from '../components/03-Experience';
import Projects from '../components/04-Projects';
import Contact from '../components/05-Contact';
import Colophon from '../components/06-Colophon';

// import AppStyle from '../assets/app.module.scss';

export default () => {
  return (
    <div>
      <Header />
      <Landing />
      <About />
      <Experience />
      <Projects />
      <Contact />
      <Colophon />
    </div>
  )
}
