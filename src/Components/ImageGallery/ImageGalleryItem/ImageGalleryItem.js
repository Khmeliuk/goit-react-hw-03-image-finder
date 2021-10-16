import { Component } from "react";
import s from "./ImageGalleryItem.module.css";
import PropTypes, { arrayOf } from "prop-types";
export default class ImageGalleryItem extends Component {
  state = {};
  render() {
    const { img } = this.props;
    return (
      <li className={s.ImageGalleryItem}>
        <img
          bigimg={img.largeImageURL}
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
