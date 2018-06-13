import React, { Component } from "react";
import "../App.css";
import ImageGrid from "./ImageGrid";

class App extends Component {
  // set default state to empty array
  state = {
    images: []
  };

  handleAddImages = () => {
    // get file obj
    const files = document.querySelector("input[type=file]").files;
    console.log("files ", files);
    // set state to array of files
    this.setState({
      images: this.state.images.concat(Array.prototype.slice.call(files))
    });
  };

  handleRemoveImages = image => {
    this.setState({
      // filter through state and return all images but the one removed
      // todo: name is not the same as a photo id, so bug happens when you upload the same image and try to delete one of them.
      images: this.state.images.filter(i => {
        return i.name !== image.name;
      })
    });
  };

  render() {
    return (
      <div className="App">
        <h1 className="main-heading">Image Uploader</h1>
        <ImageGrid
          images={this.state.images}
          removeImage={this.handleRemoveImages}
        />
        <div className="button button-upload">
          <label htmlFor="imageUpload" className="button image-upload--label">
            Upload Image
            <input
              type="file"
              id="imageUpload"
              name="imageUpload"
              text="Upload"
              className="inputFile"
              multiple
              onChange={this.handleAddImages}
            />
          </label>
        </div>
      </div>
    );
  }
}

export default App;
