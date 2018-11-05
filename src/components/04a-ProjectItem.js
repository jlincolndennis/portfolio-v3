import React, { Component } from 'react';
import { withPrefix } from 'gatsby'
import Lightbox from 'react-image-lightbox';
import 'react-image-lightbox/style.css';

import itemStyle from './04a-projectitem.module.scss';
import AnimateHeight from 'react-animate-height';

class ProjectItem extends Component {
  constructor(props) {
    super(props);

    this.state = {
      expandDetails: false,
      height: 0,
      photoIndex: 0,
      isOpen: false,
    }

    this.renderTechList = this.renderTechList.bind(this);
    this.renderProjectLinks = this.renderProjectLinks.bind(this);
    this.renderImages = this.renderImages.bind(this);
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

  renderImages(urlList) {
    const { photoIndex, isOpen } = this.state;
    if(urlList) {
    const imageList = [];
    const imageThumbs = urlList.map( (elm, i) => {
      imageList.push(withPrefix(`/images/${elm}.png`));

      return (
        <div key={elm} className={itemStyle.imgWrap}>
          <img src={withPrefix(`/images/${elm}.png`)} onClick={() => this.setState({ isOpen: true, photoIndex: i })}/>
        </div>
      )
    })

      return (
        <div>
          <h3>Preview:</h3>
          <div className={itemStyle.imageThumbs}>
            {imageThumbs}
          </div>
          <p className={itemStyle.embiggenText}>(Click an image to embiggen)</p>
          {isOpen && (
          <Lightbox
            mainSrc={imageList[photoIndex]}
            nextSrc={imageList[(photoIndex + 1) % imageList.length]}
            prevSrc={imageList[(photoIndex + imageList.length - 1) % imageList.length]}
            enableZoom={false}
            imagePadding={50}
            onCloseRequest={() => this.setState({ isOpen: false })}
            onMovePrevRequest={() =>
              this.setState({
                photoIndex: (photoIndex + imageList.length - 1) % imageList.length,
              })
            }
            onMoveNextRequest={() =>
              this.setState({
                photoIndex: (photoIndex + 1) % imageList.length,
              })
            }
          />
        )}
        </div>
      )
    }
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

            {this.renderProjectLinks(url)}

          </h2>
          <p className={itemStyle.techlist}>{this.renderTechList(techlist)}</p>
          <h3 className={itemStyle.tagline}>{tagline}</h3>
          <div className={itemStyle.showMoreWrap}>
            <button
              className={itemStyle.showMore}
              onClick={this.toggle}>Show {this.state.expandDetails ? 'Less' : 'More'}
            </button>
          </div>
          <AnimateHeight
            duration={ 500 }
            height={ height } >
            <DetailsPara />
          </AnimateHeight>
        </div>

    )
  }

}

export default ProjectItem;
