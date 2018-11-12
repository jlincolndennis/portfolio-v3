import React, { Component } from 'react';
import AnimateHeight from 'react-animate-height';

import Details from './details.js';
import itemStyle from './projectitem.module.scss';

class ProjectItem extends Component {
  constructor(props) {
    super(props);

    this.state = {
      expandDetails: false,
      height: 0,

    }

    this.renderTechList = this.renderTechList.bind(this);
    this.renderProjectLinks = this.renderProjectLinks.bind(this);
    this.toggle = this.toggle.bind(this);
  }

  renderTechList(list){
    return list.map((elm, i) => <span key={i}>{elm}</span>).reduce((prev, curr) => [prev, ' | ', curr])
  }

  renderProjectLinks(foo) {
    const { visit, code } = foo;
    return (
      <span className={itemStyle.links}>
        {
          visit ? <span><a href={visit}>Visit</a>|</span>: null
        }
        <a href={code}>Code</a>
      </span>
    )
  }

  toggle() {
    let { height } = this.state;

    this.setState({
      expandDetails: !this.state.expandDetails,
      height: height === 0 ? 'auto' : 0,
    });
  }

  render() {
    const { name, url, tagline, techlist, details, imageUrls } = this.props.item;
    const { expandDetails, height } = this.state;

    return (
        <div className={itemStyle.item}>
          <h2 className={itemStyle.name}>
            <span>{name}</span>

            {this.renderProjectLinks(url)}

          </h2>
          <h3 className={itemStyle.tagline}>{tagline}</h3>
          <p className={itemStyle.techlist}>{this.renderTechList(techlist)}</p>
          <AnimateHeight
          duration={ 500 }
          height={ height } >
          <Details details={details} imageUrls={imageUrls}/>
          </AnimateHeight>
          <p className={itemStyle.showMoreBox}>
            <button
              className={itemStyle.showMore}
              onClick={this.toggle}>{expandDetails ? 'Show Less' : 'Details...'}
            </button>
          </p>

        </div>

    )
  }

}

export default ProjectItem;
