import React, { Component } from "react";

export default class Upload extends Component {
  render() {
    return (
      <div className="button button-upload">
        <input
          type="file"
          id="imageUpload"
          name="imageUpload"
          multiple
          onChange={this.props.handleImageUpload()}
        />
      </div>
    );
  }
}
