import React, { Component } from "react";

export default class Image extends Component {
  constructor(...args) {
    super(...args);
    this.state = {
      imageData: null
    };
  }

  componentDidMount() {
    this.previewFile();
  }

  render() {
    const { image, removeImage } = this.props;

    return (
      <li key={image.name} className="grid-image">
        <div
          className="image"
          style={{ backgroundImage: `url(${this.state.imageData})` }}
          alt="preview"
        />
        <div
          onClick={() => removeImage(image)}
          className="button remove-image--label"
        >
          Remove
        </div>
      </li>
    );
  }

  previewFile = () => {
    const reader = new FileReader();
    // set state
    reader.addEventListener(
      "load",
      () => {
        this.setState({
          imageData: reader.result
        });
      },
      false
    );
    reader.readAsDataURL(this.props.image);
  };
}
