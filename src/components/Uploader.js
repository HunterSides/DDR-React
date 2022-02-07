/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from "react";
import { CssBaseline, Paper, Input } from "@material-ui/core";
import { makeStyles, withStyles } from "@material-ui/core/styles";
import { apps, user } from "@dash-incubator/dapp-sdk";

//import imageView from "./uploaders/image/image-view";
//import audioView from "./uploaders/audio/audio-view";
//import videoView from "./uploaders/video/video-view";

const useStyles = makeStyles((theme) => ({}));

const Uploader = () => {
  const [selectedFile, setSelectedFile] = useState();
  const [isSelected, setIsSelected] = useState(false);

  async function saveVideo(data) {
    let result = await apps.upload.video.save(
      await apps.upload.video.create(data)
    );
    console.log("congratulations your files has been uploaded", data);
    console.log(result);
  }
  async function saveImage(data) {
    let result = await apps.upload.image.save(
      await apps.upload.image.create(data)
    );
    console.log("congratulations your files has been uploaded", data);
    console.log(result);
  }

  async function saveAudio(data) {
    let result = await apps.upload.audio.save(
      await apps.upload.audio.create(data)
    );
    console.log("congratulations your files has been uploaded", data);
    console.log(result);
  }

  const handleFile = (event) => {
    let file = event.target.files[0];
    setSelectedFile(file);
    setIsSelected(true);
  };

  const handleSubmit = () => {
    const formData = new FormData();

    formData.append("File", selectedFile);

    if (selectedFile.type.startsWith("image/")) {
      saveImage(selectedFile);
    } else if (selectedFile.type.startsWith("video/")) {
      saveVideo(selectedFile);
    } else if (selectedFile.type.startsWith("audio/")) {
      saveAudio(selectedFile);
    }
  };

  return (
    <>
      <div className="div">
        <label className="card ">
          <div className="div-3">
            <div className="builder-columns columns">
              <div className="builder-column column">
                <span className="drag-drop-file-to-upload-or">
                  Drag & drop file to upload or click to browse files on your
                  computer
                </span>
              </div>
            </div>
          </div>
          <input
            accept="image/*, video/*, audio/*"
            onChange={handleFile}
            className="--hidden"
            type="file"
            name="file"
            multiple
          />
        </label>
        <button className="box" onClick={handleSubmit}>
          Upload
        </button>
      </div>
    </>
  );
};

export default Uploader;
