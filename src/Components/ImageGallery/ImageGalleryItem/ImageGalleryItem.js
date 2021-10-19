import { Component } from "react";
import s from "./ImageGalleryItem.module.css";
import PropTypes from "prop-types";
export default class ImageGalleryItem extends Component {
  handlerOnClick = () => {
    this.props.onClick(this.props.img.largeImageURL);
  };
  render() {
    const { img } = this.props;
    return (
      <li className={s.ImageGalleryItem}>
        <img
          onClick={this.handlerOnClick}
          src={img.webformatURL}
          alt={img.tag}
          className={s.ImageGalleryItem_image}
        />
      </li>
    );
  }
}

ImageGalleryItem.propTypes = {
  img: PropTypes.shape({
    largeImageURL: PropTypes.string.isRequired,
    webformatURL: PropTypes.string.isRequired,
    tag: PropTypes.array,
  }),
};
