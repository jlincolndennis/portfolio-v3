import React from 'react';
import colophonStyle from './06-colophon.module.scss';

const Colophon = () => {
  return (
    <div className={colophonStyle.colophon}>
      <h1>Colophon</h1>
      <p>This site was built by J Lincoln Dennis in 2018 with <a href="https://reactjs.org/">React</a> and <a href="https://www.gatsbyjs.org/">Gatsby</a>.</p>

      <p><a href="https://www.npmjs.com/package/react-image-lightbox">Lightbox</a> by <a href="https://github.com/frontend-collective">The Frontend Collective</a>.</p>

      <p>Fonts used are <a href="https://fonts.google.com/specimen/Hind">Hind</a> and <a href="https://fonts.google.com/specimen/Inconsolata">Inconsolata</a>.</p>
    </div>
  )
}

export default Colophon;
