import React from 'react';
import colophonStyle from './colophon.module.scss';

const Colophon = () => {
  return (
    <div className={colophonStyle.colophon}>
      <h1>Colophon</h1>
      <p>This site was built by <span className={colophonStyle.name}>J Lincoln Dennis</span> in 2018 with <a href="https://reactjs.org/">React</a> and <a href="https://www.gatsbyjs.org/">Gatsby</a>.</p>

      <p><a href="https://www.npmjs.com/package/react-image-lightbox">Lightbox</a> by <a href="https://github.com/frontend-collective">The Frontend Collective</a>.</p>
    </div>
  )
}

export default Colophon;
