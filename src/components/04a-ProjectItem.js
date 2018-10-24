import React, { Component } from 'react';

import itemStyle from './04a-projectitem.module.scss';
import AnimateHeight from 'react-animate-height';

class ProjectItem extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isOpen: false,
      height: 0
    }

    this.renderTechList = this.renderTechList.bind(this);
    this.toggle = this.toggle.bind(this);
  }

  renderTechList(list){
    return list.map((elm, i) => <span key={i}>{elm}</span>).reduce((prev, curr) => [prev, ' | ', curr])
  }

  toggle() {
    let { height } = this.state;

    this.setState({
      isOpen: !this.state.isOpen,
      height: height === 0 ? 'auto' : 0,
    });
  }

  render() {
    const { name, url, tagline, techlist, details } = this.props.item;
    const { isOpen, height } = this.state;

    const DetailsPara = ()=> (
      <div className={itemStyle.details}>
        <p>{details}</p>
      </div>
    )

    return (
        <div className={itemStyle.item}>
          <h2 className={itemStyle.name}>
            <span>{name}</span>
            <span className={itemStyle.links}>
              <a href={url.visit}>Visit</a> | <a href={url.code}>Codebase</a>
            </span>
          </h2>
          <p className={itemStyle.techlist}>{this.renderTechList(techlist)}</p>
          <h3 className={itemStyle.tagline}>{tagline}</h3>
          <AnimateHeight
            duration={ 500 }
            height={ height } >
            <DetailsPara />
          </AnimateHeight>
          <button
            onClick={this.toggle}>Show {this.state.isOpen ? 'Less' : 'More'}
          </button>
        </div>

    )
  }

}

export default ProjectItem;
