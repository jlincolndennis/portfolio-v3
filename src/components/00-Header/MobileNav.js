import React, { Component } from 'react';
import AnchorLink from 'react-anchor-link-smooth-scroll';

import navStyle from './mobilenav.module.scss';

class MobileNav extends Component {
  constructor(props) {
    super(props);


  }

  render() {
    let { toggle } = this.props;

    return (

        <div className={navStyle.mobileNav}>
          <ul className={navStyle.menu}>
            <li>
              <AnchorLink
                offset='125'
                href="#about"
                onClick={toggle}>About</AnchorLink>
            </li>
            <li>
              <AnchorLink
                offset='125'
                href="#experience"
                onClick={toggle}>Experience</AnchorLink>
            </li>
            <li>
              <AnchorLink
                offset='125'
                href="#projects"
                onClick={toggle}>Projects</AnchorLink>
            </li>
            <li>
              <AnchorLink
                offset='150'
                href="#contact"
                onClick={toggle}>Contact</AnchorLink>
            </li>
          </ul>
        </div>

    )
  }

}

export default MobileNav;
