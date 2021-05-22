import React from "react";
import axios from "axios";
import { Progress } from "reactstrap";
import { ToastContainer, toast } from "react-toastify";
import { Redirect } from "react-router-dom";

import "react-toastify/dist/ReactToastify.css";
import "./Upload.css";
import Navbar from "../Navbar/Navbar";

class Upload extends React.Component {
  state = {
    selectedVideos: null,
    loaded: 0,
  };

  maxSelectFile(event) {
    let files = event.target.files;
    if (files.length > 1) {
      toast.error("Maximum 1 file is allowed");
      event.target.value = null;
      return false;
    } else {
      let err = "";
      for (let i = 0; i < files.length; i++) {
        if (files[i].size > 1002428800) {
          // 1000 MB
          err += files[i].name + ", ";
        }
      }
      if (err !== "") {
        // error caught
        event.target.value = null;
        toast.error(
          err + " is/are too large. Please select a smaller size file file "
        );
      }
    }
    return true;
  }

  fileChangeHandler(event) {
    const files = event.target.files;
    if (this.maxSelectFile(event)) {
      this.setState({
        selectedVideos: files,
        loaded: 0,
      });
    }
  }

  fileUploadHandler(event) {
    alert("Please wait for the upload successful pop up to appear.");
    const data = new FormData();
    for (let i = 0; i < this.state.selectedVideos.length; i++) {
      data.append("file", this.state.selectedVideos[i]);
    }
    axios
      .post(
        "http://127.0.0.1:3333/api/upload",
        data,
        {
          headers: {
            "Content-Type": "application/json",
            Authorization:
              "Bearer " +
              JSON.parse(localStorage.getItem("userTokenTime")).token,
          },
        },
        {
          onUploadProgress: (ProgressEvent) => {
            this.setState({
              loaded: (ProgressEvent.loaded / ProgressEvent.total) * 100,
            });
          },
        }
      )
      .then((res) => {
        toast.success("Upload Successful");

        // <Redirect to="/home" />;
      })
      .catch((err) => {
        toast.error(`Upload Failed please try again`);
      });
  }

  render() {
    if (!localStorage.getItem("userTokenTime"))
      return <Redirect to="/signIn" />;
    return (
      <React.Fragment>
        <Navbar />
        <div className="container mt-5">
          <div className="form-group">
            <ToastContainer />
          </div>
          <h4>Upload Video</h4>
          <hr className="my-4" />

          <form
            method="post"
            name="videoUpload"
            action="/api/upload"
            id="#"
            encType="multipart/form-data"
          >
            <div className="form-group files">
              <label>Upload Your Video Here</label>
              <input
                type="file"
                name="file"
                className="form-control"
                multiple="multiple"
                accept="video/*"
                onChange={this.fileChangeHandler.bind(this)}
              />
              <Progress
                max="100"
                color="success"
                value={this.state.loaded}
                className="mt-4 mb-1"
              >
                {isNaN(Math.round(this.state.loaded, 2))
                  ? 0
                  : Math.round(this.state.loaded, 2)}
                %
              </Progress>
              <button
                type="button"
                className="btn btn-success btn-block"
                onClick={this.fileUploadHandler.bind(this)}
              >
                Upload
              </button>
            </div>
          </form>
        </div>
      </React.Fragment>
    );
  }
}

export default Upload;
