import React, { Component } from 'react';
import { withPrefix } from 'gatsby'

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
    this.renderImages = this.renderImages.bind(this);
    this.toggle = this.toggle.bind(this);
  }

  renderTechList(list){
    return list.map((elm, i) => <span key={i}>{elm}</span>).reduce((prev, curr) => [prev, ' | ', curr])
  }

  renderImages(urlList) {
    if(urlList) {
    const imageThumbs = urlList.map( (elm, i) => {
      return (
        <div key={elm} className={itemStyle.imgWrap}>
          <img src={withPrefix(`/images/${elm}.png`)} />
        </div>
      )
    })

      return (
        <div>
          <h3>Preview:</h3>
          <div className={itemStyle.imageThumbs}>
            {imageThumbs}
          </div>
          <p className={itemStyle.embiggenText}>(Click to embiggen)</p>
        </div>
      )
    }
  }


  toggle() {
    let { height } = this.state;

    this.setState({
      isOpen: !this.state.isOpen,
      height: height === 0 ? 'auto' : 0,
    });
  }

  render() {
    const { name, url, tagline, techlist, details, imageUrls } = this.props.item;
    const { isOpen, height } = this.state;

    const DetailsPara = () => (
      <div className={itemStyle.details}>
        <p>{details}</p>
        {this.renderImages(imageUrls)}
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
          <div className={itemStyle.showMoreWrap}>
            <button
              className={itemStyle.showMore}
              onClick={this.toggle}>Show {this.state.isOpen ? 'Less' : 'More'}
            </button>
          </div>
        </div>

    )
  }

}

export default ProjectItem;
