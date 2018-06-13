import React, { Component } from "react";
import Image from "./Image";

export default class ImageGrid extends Component {
  render() {
    const { images, removeImage } = this.props;
    // if there are no images, display a message
    if (images.length < 1) {
      return (
        <div className="no-images">
          No images to preview - Why don't you upload some?
        </div>
      );
    }

    return (
      // map through images and return image component for each image
      <div className="grid">
        <ul className="grid-images">
          {images.map(image => (
            <Image image={image} key={image.name} removeImage={removeImage} />
          ))}
        </ul>
      </div>
    );
  }
}
