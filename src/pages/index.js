import React from "react"

import Header from '../components/00-Header/Header';
import Landing from '../components/01-Landing/Landing';
import About from '../components/02-About/About';
import Experience from '../components/03-Experience/Experience';
import Projects from '../components/04-Projects/Projects';
import Contact from '../components/05-Contact/Contact';
import Colophon from '../components/06-Colophon/Colophon';

// import AppStyle from '../assets/app.module.scss';

export default () => {
  return (
      <div id="home">
        <Header />
        <div className="content">
          <Landing />
          <About />
          <Experience />
          <Projects />
          <Contact />
        </div>
        <Colophon />
      </div>
    )


}
