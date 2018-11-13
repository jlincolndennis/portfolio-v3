import React from "react";
import { Helmet } from "react-helmet";

import Header from '../components/00-Header/Header';
import Landing from '../components/01-Landing/Landing';
import About from '../components/02-About/About';
import Experience from '../components/03-Experience/Experience';
import Projects from '../components/04-Projects/Projects';
import Contact from '../components/05-Contact/Contact';
import Colophon from '../components/06-Colophon/Colophon';

export default () => {
  return (
      <div id="home">
        <Helmet>
          <title>J Lincoln Dennis</title>
          <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
          <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
          <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
          <link rel="manifest" href="/site.webmanifest" />
          <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#bf1363" />
          <meta name="msapplication-TileColor" content="#b91d47" />
          <meta name="theme-color" content="#ffffff" />

          <meta name="twitter:card" content="summary" />
          <meta name="twitter:site" content="@jlincolndennis" />
          <meta name="twitter:creator" content="@jlincolndennis" />
          <meta property="og:image:height" content="1257" />
          <meta property="og:image:width" content="2400" />
          <meta property="og:description" content="Hi. I'm a web developer living in Colorado. I like making things with words. I'm passionate about art, creativity, the future, and equality. Oh, and comic books. And cats. And lots of awesome things, really." />
          <meta property="og:title" content="J Lincoln Dennis - WebDev for hire!" />
          <meta property="og:url" content="https://jlincolndennis.com/" />
          <meta property="og:image" content="https://jlincolndennis.com/og-image.jpg" />
        </Helmet>

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
