/* eslint-disable no-unused-vars */
import React, { useState, useEffect, useRef } from "react";
import { CssBaseline, Paper, Input } from "@material-ui/core";
import { makeStyles, withStyles } from "@material-ui/core/styles";
import { apps, user } from "@dash-incubator/dapp-sdk";



const Uploader = () => {
  const [selectedFile, setSelectedFile] = useState();
  const [selectedFiles, setSelectedFiles] = useState([])
  const [assetType, setAsset] = useState()
  const [banner, setBanner] = useState()
  const [thumbnail, setThumbnail] = useState()

  
  const [imageOptions, setImageOptions] = useState({
    name: '',
    description: '',
    compress: false,
    encrypt: false,
    gallery: selectedFiles,
    image: selectedFile,
    keywords: [],
    secret: '',
  })
  const [audioOptions, setAudioOptions] = useState({
  name: '',
  description: '',
  banner: banner,
  thumbnail: thumbnail,
  compress: false,
  encrypt: false,
  audio: selectedFile,
  keywords: [],
  secret: '',
  transcoded: false
  })
  const [videoOptions, setVideoOptions] = useState({
  name: '',
  description: '',
  banner: banner,
  thumbnail: thumbnail,
  compress: false,
  encrypt: false,
  video: selectedFile,
  keywords: [],
  secret: '',
  transcoded: false
  })
 

  const handleFile = (event) => {
    let file = event.target.files[0];
    let files = event.target.files

    setSelectedFile(file);
    setSelectedFiles(files)
    
    if (file.type.startsWith("image/")) {
        setAsset("image")
    } else if (file.type.startsWith("video/")) {
        setAsset("video")
    } else if (file.type.startsWith("audio/")) {
        setAsset("audio")
    }
    
  };
  const handleSubmit = () => {
  
    if (selectedFile.type.startsWith("image/")) {
        save(selectedFile); 
    } else if (selectedFile.type.startsWith("video/")) {
        save(selectedFile); 
    } else if (selectedFile.type.startsWith("audio/")) {
        save(selectedFile); 
    } else{
      console.log("unsupported file type", selectedFile.type)
    }
  };
  
  async function save() {
   
    if (selectedFile.type.startsWith("image/")){
      console.log(imageOptions)
        let result = await apps.upload.image.save(
            await apps.upload.image.create(imageOptions)
          );
          console.log("Result:", result)

    } else if (selectedFile.type.startsWith("video/")) {
        console.log(videoOptions)
        let result = await apps.upload.video.save(
            await apps.upload.video.create(videoOptions)
          );
          console.log("Result:", result)

    } else if (selectedFile.type.startsWith("audio/")) {
        let result = await apps.upload.audio.save(
            await apps.upload.audio.create(audioOptions)
          );
          console.log("Result:", result)
          
    } else {
          console.log("error could not save file", selectedFile)
    }
  }
  
  return (
    <>
      <div className="div">
        <label className="card ">
          <div className="div-3">
            <div className="builder-columns columns">
              <div className="builder-column column">
                <span aria-hidden="true" className="drag-drop-file-to-upload-or">
                  Drag & drop file to upload or click to browse files on your
                  computer
                </span>
              </div>
            </div>
          </div>
          <input
            accept="image/*, audio/*, video/*"
            onChange={handleFile}
            type="file"
            hidden
            multiple
          />
          { assetType === "image" ? <div>
              <form >
                  <div>
                      <label htmlFor="name"> Name: </label> 
                      <input onChange={(e) => setImageOptions({...imageOptions, name: e.target.value})} value={imageOptions.name} type="text" name="name" id="name"/> 
                  </div>
                  <div>
                      <label htmlFor="description"> Description: </label> 
                      <input onChange={(e) => setImageOptions({...imageOptions, description: e.target.value})} value={imageOptions.description} type="text" name="description" id="description"/> 
                  </div>
                  <div>
                      <label htmlFor="keywords"> Keywords: </label> 
                      <input onChange={(e) => setImageOptions({...imageOptions, keywords: e.target.value})} value={imageOptions.keywords} type="text" name="keywords" id="keywords"/> 
                  </div>
                  <div>
                  
                      <label htmlFor="encrypted"> Encrypted </label> 
                      <input checked={imageOptions.encrypt} onChange={(e) => setImageOptions({...imageOptions, encrypt: e.target.checked})} type="checkbox" name="encrypt" id="encrypt" /> 
                  
                  </div>
                  <div>
                      <label htmlFor="compress"> compress: </label> 
                      <input checked={imageOptions.compress} onChange={(e) => setImageOptions({...imageOptions, compress: e.target.checked})}  type="checkbox" name="compress" id="compress"  /> 
                  </div>
                  
              </form> 
                                    </div>    
          : assetType === "audio" ? <div>
           <form >
               <div>
                   <label htmlFor="name"> Name: </label> 
                   <input onChange={(e) => setAudioOptions({...audioOptions, name: e.target.value})} value={audioOptions.name} type="text" name="name" id="name"/> 
               </div>
               <div>
                   <label htmlFor="description"> Description: </label> 
                   <input onChange={(e) => setAudioOptions({...audioOptions, description: e.target.value})} value={audioOptions.description} type="text" name="description" id="description"/> 
               </div>
               <div>
                   <label htmlFor="keywords"> Keywords: </label> 
                   <input onChange={(e) => setAudioOptions({...audioOptions, keywords: e.target.value})} value={audioOptions.keywords} type="text" name="keywords" id="keywords"/> 
               </div>
               <div>
                      <label htmlFor="encrypted"> Encrypted </label> 
                      <input checked={audioOptions.encrypt} onChange={(e) => setAudioOptions({...audioOptions, encrypt: e.target.checked})} type="checkbox" name="encrypt" id="encrypt" /> 
                  </div>
               <div>
                   <label htmlFor="compress"> compress: </label> 
                   <input checked={audioOptions.compress} onChange={(e) => setAudioOptions({...audioOptions, compress: e.target.checked})}  type="checkbox" name="compress" id="compress"  /> 
               </div>
               
           </form> 
                                    </div>  
          : assetType === "video" ? <div>
        <form >
            <div>
                <label htmlFor="name"> Name: </label> 
                <input onChange={(e) => setVideoOptions({...videoOptions, name: e.target.value})} value={videoOptions.name} type="text" name="name" id="name"/> 
            </div>
            <div>
                <label htmlFor="description"> Description: </label> 
                <input onChange={(e) => setVideoOptions({...videoOptions, description: e.target.value})} value={videoOptions.description} type="text" name="description" id="description"/> 
            </div>
            <div>
                <label htmlFor="keywords"> Keywords: </label> 
                <input onChange={(e) => setVideoOptions({...videoOptions, keywords: e.target.value})} value={videoOptions.keywords} type="text" name="keywords" id="keywords"/> 
            </div>
            <div>
                      <label htmlFor="encrypted"> Encrypted </label> 
                      <input checked={videoOptions.encrypt} onChange={(e) => setVideoOptions({...videoOptions, encrypt: e.target.checked})} type="checkbox" name="encrypt" id="encrypt" /> 
                  </div>
            <div>
                <label htmlFor="compress"> compress: </label> 
                <input checked={videoOptions.compress} onChange={(e) => setVideoOptions({...videoOptions, compress: e.target.checked})}  type="checkbox" name="compress" id="compress"  /> 
            </div>
            
        </form> 
                                    </div>  
          : <></>}
        </label>
        <button className="box" onClick={handleSubmit}>
          Upload
        </button>
      </div>
      <style jsx>{`
        .div {
          display: flex;
          flex-direction: column;
          max-width: 560px;
          min-width: 560px;
          min-height: 600px;
          justify-content: flex-start;
          align-items: flex-start;
          box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
          padding-top: 129px;
          padding-bottom: 129px;
          padding-right: 45px;
          padding-left: 45px;
          background-color: rgba(0, 141, 228, 1);
        }
        input.file {
          position: relative;
          text-align: right;
          -moz-opacity:0 ;
          filter:alpha(opacity: 0);
          opacity: 0;
          z-index: 2;
        }
        .div-3 {
          display: flex;
          flex-direction: column;
          max-width: 464px;
          padding-top: 20px;
          padding-bottom: 40px;
          padding-right: 20px;
          padding-left: 20px;
          border-color: rgba(0, 0, 0, 1);
          border-width: 1px;
          border-style: solid;
          background-color: rgba(255, 255, 255, 1);
        }
        .columns {
          display: flex;
          padding: 10px;
        }
        @media (max-width: 999px) {
          .columns {
            flex-direction: column;
            align-items: stretch;
          }
        }
        .column {
          display: flex;
          flex-direction: column;
          line-height: normal;
          width: calc(98.8% - 0px);
          margin-left: 0px;
        }
        @media (max-width: 999px) {
          .column {
            width: 100%;
          }
        }
        .drag-drop-file-to-upload-or {
          position: static;
          width: 410px;
          height: 60px;
          left: 10px;
          top: 10px;
          color: rgba(148, 148, 148, 1);
          letter-spacing: 0%;
          line-height: 30px;
          text-align: center;
          font-family: "M PLUS 1p Bold", sans-serif;
          font-style: normal;
          font-weight: 700;
          font-size: 20px;
        }
        .box {
          display: flex;
          flex-direction: row;
          justify-content: center;
          margin-top: 86px;
          padding-top: 2px;
          padding-bottom: 2px;
          padding-right: 20px;
          padding-left: 20px;
          border-width: 1px;
          border-style: solid;
          background-color: rgba(255, 255, 255, 1);
          margin-left: auto;
          margin-right: auto;
          color: rgba(0, 141, 228, 1);
          font-size: 20px;
          letter-spacing: 0%;
          text-align: left;
          font-family: "M PLUS 1p Bold", sans-serif;
          font-style: normal;
          font-weight: 700;
        }
      `}</style>
    </>
  );
};

export default Uploader;
