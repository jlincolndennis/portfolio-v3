import React, { Component } from 'react';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import debounce from 'lodash.debounce';

import headerStyle from './header.module.scss';

class Header extends Component {
  constructor(props){
    super(props);

    this.state = {
      landingHeight: null
    }
    this.handleScroll = this.handleScroll.bind(this);
    this.debouncedFunction = debounce(this.handleScroll , 16)

  }

  handleScroll() {
    let { landingHeight } = this.state;
    let scroll = window.scrollY;

    if(scroll > landingHeight) {
      this.header.classList.add(`${headerStyle.fixed}`)
    } else {
      this.header.classList.remove(`${headerStyle.fixed}`)
    }
  }

  componentDidMount() {
    const el = document.querySelector('#landing');
    this.setState({
      landingHeight: el.offsetTop + el.offsetHeight
    });
    window.addEventListener('scroll', this.debouncedFunction);
  }

  componentWillUnmount(){
    window.removeEventListener('scroll', this.debouncedFunction);
  }

  render() {

    return (
      <header ref={(ref) => this.header = ref} className={headerStyle.header}>
        <h1>
          <AnchorLink offset='150' href="#home">
            J<span>Lincoln</span>Dennis
          </AnchorLink>
        </h1>

        <ul>
          <li><AnchorLink offset='125' href="#about">About</AnchorLink></li>
          <li><AnchorLink offset='125' href="#experience">Experience</AnchorLink></li>
          <li><AnchorLink offset='125' href="#projects">Projects</AnchorLink></li>
          <li><AnchorLink offset='150' href="#contact">Contact</AnchorLink></li>
        </ul>

      </header>
    )

  }
}

export default Header;
