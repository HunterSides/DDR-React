import React, { useState, useEffect } from "react";
import { CssBaseline, Paper } from "@material-ui/core";

import { image, audio, video } from "./uploaders";
import init from "../services/init";

const Uploader = () => {
  useEffect(() => {
    init();
  }, []);

  const videoType = ".mp4";
  const audioType = ".mp3";

  const handleCapture = ({ target }: any) => {
    setSelectedFile(target.files[0]);
  };
  const handleFile = function () {
    let file = this.element.files[0];

    if (file.type.startsWith("image/")) {
      console.log("image");
      image();
    } else if (file.type === videoType) {
      console.log("video");
      video();
    } else if (file.type === audioType) {
      console.log("audio");
      audio();
    }
  };

  return (
    <>
      <input type="file" onChange="handleFile"></input>
    </>
  );
};

export default Uploader;
