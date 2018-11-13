import React, {Component} from 'react';
import { withPrefix } from 'gatsby';
import Lightbox from 'react-image-lightbox';
import detailsStyle from './details.module.scss';

class Details extends Component {
  constructor(props){
    super(props);

    this.state = {
      photoIndex: 0,
      isOpen: false,
    }

    this.renderImages = this.renderImages.bind(this);
  }


    renderImages(urlList) {
      const { photoIndex, isOpen } = this.state;
      if(urlList) {
      const imageList = [];

      const imageThumbs = urlList.map( (elm, i) => {
        imageList.push(withPrefix(`/images/${elm}.png`));

        return (
          <div key={elm} className={detailsStyle.imgWrap}>
            <img src={withPrefix(`/images/${elm}.png`)} alt={elm} onClick={() => this.setState({ isOpen: true, photoIndex: i })}/>
          </div>
        )
      })

        return (
          <div>
            <h3>Preview:</h3>
            <div className={detailsStyle.imageThumbs}>
              {imageThumbs}
            </div>
            <p className={detailsStyle.embiggenText}>(Click an image to embiggen)</p>

            {isOpen && (
              <Lightbox
                mainSrc={imageList[photoIndex]}
                nextSrc={imageList[(photoIndex + 1) % imageList.length]}
                prevSrc={imageList[(photoIndex + imageList.length - 1) % imageList.length]}
                animationDisabled={false}
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

  render() {
    const { details, imageUrls } = this.props

    return (
      <div className={detailsStyle.details}>
        <p>{details}</p>
        {this.renderImages(imageUrls)}
      </div>
    )
  }
}

export default Details;
