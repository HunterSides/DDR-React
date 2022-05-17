/* eslint-disable no-unused-vars */
import React, { useState, useEffect, useRef } from "react";

import { apps, user } from "@dash-incubator/dapp-sdk";



const Uploader = () => {
  const [selectedFile, setSelectedFile] = useState();
  const [selectedFiles, setSelectedFiles] = useState([])
  const [assetType, setAsset] = useState()
  const [words, setWords] = useState([])
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
  banner: null,
  thumbnail: null,
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
  banner: null,
  thumbnail: null,
  compress: false,
  encrypt: false,
  video: selectedFile,
  keywords: [],
  secret: '',
  transcoded: false
  })
 

  const handleFile = (e) => {
    e.preventDefault();
    let file = e.target.files[0];
    let files = e.target.files

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
  const handleSubmit = (e) => {
    e.preventDefault();
      console.log(selectedFile)
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

  const handleAdd = (e) => {
    e.preventDefault();

    if (assetType === "image"){
      imageOptions.keywords.push(words)
    } else if (assetType === "video"){
      videoOptions.keywords.push(words)
    } else if (assetType === "audio"){
      audioOptions.keywords.push(words)
    }
    
    setWords("")
  };
  
  async function save() {
   
        if (selectedFile.type.startsWith("image/")){
          
              if (selectedFiles) {
                  imageOptions.gallery = selectedFiles;
              }
              else {
                  imageOptions.image = selectedFile;
              }
              let result = await apps.image.save(
                await apps.image.create(imageOptions)
              );
              console.log("uploading image with these selected options:", imageOptions)   
              console.log("Result:", result)
              
      } else if (selectedFile.type.startsWith("video/")) {
      
              if (selectedFile) {
                videoOptions.video = selectedFile;
              }
              let result = await apps.video.save(
                await apps.video.create(videoOptions)
              );
              console.log("uploading video with these selected options:", videoOptions)
              console.log("Result:", result)
              
      } else if (selectedFile.type.startsWith("audio/")) {
        
              if (selectedFile) {
                audioOptions.audio = selectedFile;
              }
              let result = await apps.audio.save(
                await apps.audio.create(audioOptions)
              );
              console.log("uploading audio with these selected options:", audioOptions)
              console.log("Result:", result)
      } else {
              console.log("error could not save file", selectedFile)
      }
}
  
  return (
    <>
      <div className="div">
          <div className="upload-section-main">
              <div className="upload-box-main">
                <input
                    class="file-upload-input-main"
                    accept="image/*, audio/*, video/*"
                    onChange={handleFile}
                    type="file"
                    multiple
                  />
                  <div class="drag-text">
                    <h1>Drag & drop any image file or click to browse files on your computer</h1>
                  </div>
                </div>
          </div>
          { assetType === "image" ? 
          <div>
              <form>
                  <div className="text-area">
                      <label htmlFor="name"> Name </label> 
                        <input onChange={(e) => setImageOptions({...imageOptions, name: e.target.value})} value={imageOptions.name} type="text" name="name" id="name"/>
                  </div>
                  <div className="text-area">
                      <label htmlFor="description"> Description </label> 
                      <input onChange={(e) => setImageOptions({...imageOptions, description: e.target.value})} value={imageOptions.description} type="text" name="description" id="description"/> 
                  </div>
                  <div className="text-area">
                      <label htmlFor="keywords"> Keywords </label> 
                      <input type="text" onChange={(e) => setWords(e.target.value)} value={words}/> 
                      <button  type="reset" onClick={handleAdd}> + </button>
                      <span className="list">
                        {imageOptions.keywords.map((word, key) => (
                            <li{...{key}}> 
                                <div> { word } </div> 
                              </li>
                            ))}
                      </span>
                  </div>
                <div className="checkbox-section">
                  <div className="checkbox-round">
                      <input type="checkbox" id="encrypt" checked={imageOptions.encrypt} onChange={(e) => setImageOptions({...imageOptions, encrypt: e.target.checked})}  /> 
                      <label htmlFor="encrypt"></label>
                      <div>Encrypt File(s)</div>
                  </div>
                  <div className="checkbox-round">
                      <input type="checkbox" id="compress" checked={imageOptions.compress} onChange={(e) => setImageOptions({...imageOptions, compress: e.target.checked})}    /> 
                      <label htmlFor="compress"></label>
                      <div>Compress</div>
                  </div>
                  <div className="checkbox-round">
                      <input  type="checkbox" id="unlisted"  /> 
                      <label htmlFor="unlisted"></label>
                      <div>Upload as unlisted</div>
                  </div>
                </div>
              </form> 
          </div>    
          : assetType === "audio" ? 
          <div>
           <form >
               <div className="text-area">
                   <label htmlFor="name"> Name </label> 
                   <input onChange={(e) => setAudioOptions({...audioOptions, name: e.target.value})} value={audioOptions.name} type="text" name="name" id="name"/> 
               </div>
               <div className="text-area">
                   <label htmlFor="description"> Description </label> 
                   <input onChange={(e) => setAudioOptions({...audioOptions, description: e.target.value})} value={audioOptions.description} type="text" name="description" id="description"/> 
               </div>
               <div class="upload-section">
                  <div className="thumbnail"> 
                    <label> Thumbnail </label>
                      <div class="upload-box">
                       <input class="file-upload-input" type='file' onChange={(e) => setAudioOptions({...audioOptions, thumbnail: e.target.files[0]})} accept="image/*" />
                       <div class="drag-text">
                          <h3>Drag & drop any image file or click to browse files on your computer</h3>
                        </div>
                    </div>
                  </div>
                  <div className="banner"> 
                      <label> Banner </label>
                      <div class="upload-box">
                        <input class="file-upload-input" type='file' onChange={(e) => setAudioOptions({...audioOptions, banner: e.target.files[0]})} accept="image/*" />
                        <div class="drag-text">
                          <h3>Drag & drop any image file or click to browse files on your computer</h3>
                        </div>
                    </div>
                  </div>
              </div>          
               <div className="text-area">
                  <label htmlFor="keywords"> Keywords </label> 
                  <input type="text" onChange={(e) => setWords(e.target.value)} value={words}/> 
                  <button  type="reset" onClick={handleAdd}> + </button>
                  <span className="list">
                    {audioOptions.keywords.map((word, key) => (
                        <li{...{key}}> 
                            <div> { word } </div> 
                          </li>
                        ))}
                  </span>
                </div>
                <div className="checkbox-section">
                  <div className="checkbox-round">
                      <input type="checkbox" id="encrypt" checked={audioOptions.encrypt} onChange={(e) => setAudioOptions({...audioOptions, encrypt: e.target.checked})}  /> 
                      <label htmlFor="encrypt"></label>
                      <div>Encrypt File(s)</div>
                  </div>
                  <div className="checkbox-round">
                      <input type="checkbox" id="compress" checked={audioOptions.compress} onChange={(e) => setAudioOptions({...audioOptions, compress: e.target.checked})}    /> 
                      <label htmlFor="compress"></label>
                      <div>Compress</div>
                  </div>
                  <div className="checkbox-round">
                      <input  type="checkbox" id="unlisted"  /> 
                      <label htmlFor="unlisted"></label>
                      <div>Upload as unlisted</div>
                  </div>
                </div>
           </form> 
          </div>  
          : assetType === "video" ? 
        <div>
        <form >
            <div className="text-area">
                <label htmlFor="name"> Name: </label> 
                <input onChange={(e) => setVideoOptions({...videoOptions, name: e.target.value})} value={videoOptions.name} type="text" name="name" id="name"/> 
            </div>
            <div className="text-area">
                <label htmlFor="description"> Description: </label> 
                <input onChange={(e) => setVideoOptions({...videoOptions, description: e.target.value})} value={videoOptions.description} type="text" name="description" id="description"/> 
            </div>
            <div class="upload-section">
                  <div className="thumbnail"> 
                    <label> Thumbnail </label>
                      <div class="upload-box">
                       <input class="file-upload-input" type='file' onChange={(e) => setVideoOptions({...videoOptions, thumbnail: e.target.files[0]})} accept="image/*" />
                       <div class="drag-text">
                          <h3>Drag & drop any image file or click to browse files on your computer</h3>
                        </div>
                    </div>
                  </div>
                  <div className="banner"> 
                      <label> Banner </label>
                      <div class="upload-box">
                        <input class="file-upload-input" type='file' onChange={(e) => setVideoOptions({...videoOptions, banner: e.target.files[0]})} accept="image/*" />
                        <div class="drag-text">
                          <h3>Drag & drop any image file or click to browse files on your computer</h3>
                        </div>
                    </div>
                  </div>
              </div>   
            <div className="text-area">
                  <label htmlFor="keywords"> Keywords </label> 
                  <input type="text" onChange={(e) => setWords(e.target.value)} value={words}/> 
                  <button  type="reset" onClick={handleAdd}> + </button>
                  <span className="list">
                    {videoOptions.keywords.map((word, key) => (
                        <li{...{key}}> 
                            <div> { word } </div> 
                          </li>
                        ))}
                  </span>
                </div>
                <div className="checkbox-section">
                  <div className="checkbox-round">
                      <input type="checkbox" id="encrypt" checked={videoOptions.encrypt} onChange={(e) => setVideoOptions({...videoOptions, encrypt: e.target.checked})}  /> 
                      <label htmlFor="encrypt"></label>
                      <div>Encrypt File(s)</div>
                  </div>
                  <div className="checkbox-round">
                      <input type="checkbox" id="compress" checked={videoOptions.compress} onChange={(e) => setVideoOptions({...videoOptions, compress: e.target.checked})}    /> 
                      <label htmlFor="compress"></label>
                      <div>Compress</div>
                  </div>
                  <div className="checkbox-round">
                      <input  type="checkbox" id="unlisted"  /> 
                      <label htmlFor="unlisted"></label>
                      <div>Upload as unlisted</div>
                  </div>
                </div>
        </form> 
      </div>  
          : <></>}
        <button className="upload-button" onClick={handleSubmit}>
          Upload
        </button>
      </div>
      <style jsx>{`
      
        textarea:focus, input:focus{
          outline: none;
        }
        .text-area {
          display: flex;
          postion: relative;
          flex-direction: column;
          max-width: 471px;
          justify-content: flex-start;
          align-items: flex-start;
        }
        .text-area label {
          max-width: 99px;
          margin-top: 25px;
          color: rgba(255, 255, 255, 1);
          font-size: 18px;
          letter-spacing: 0%;
          text-align: left;
          font-family: Mplus 1p Bold, sans-serif;
        }
        .text-area input {
          display: flex;
          max-width: 471px;
          height: 43px;
          width: 471px;
          border-radius: 7px;
          border: 1px solid #008DE4;
          box-sizing: border-box;
          background-color: rgba(255, 255, 255, 1);
        }
        
        .text-area button {
          position: relative;
          height:45px
          width:23px;
          font-size: 30px;
          text-decoration: none;
          color: black;
          border: none;
          border-radius: 7px;
          background-color: white;
          top: -38px;
          left: 437px;
          cursor: pointer;
        }
        .text-area span {
          margin-bottom: 22px
        }
        .text-area li {
          display: flex;
          height: 43px;
          margin-bottom: 6px;
          width: 471px;
          border-radius: 7px;
          border: 1px solid #008DE4;
          box-sizing: border-box;
          background-color: rgba(255, 255, 255, 1);
        }
        .text-area li div {
          font-family: Mplus 1p Bold;
          font-style: normal;
          font-weight: bold;
          font-size: 18px;
          line-height: 40px;
          padding-left: 11px;
          color: #000000;

        }
        .checkbox-section {
          margin-bottom:
        }
        .checkbox-round {
          position: relative;
          display: flex;
          max-width: 251px;
          color: rgba(255, 255, 255, 1);
          font-size: 20px;
          text-align: left;
          font-family: Mplus 1p Bold, sans-serif;
        }
        .checkbox-round div {
          width: 227px;
          height: 40px;
          margin-left: 3px;
          color: rgba(255, 255, 255, 1);
          font-size: 20px;
          line-height: 24px;
          letter-spacing: 0%;
          text-align: left;
          font-family: Mplus 1p Bold, sans-serif;
          padding-left: 3px;
        }
        .checkbox-round label {
          background-color: #fff;
          border-radius: 7px;
          cursor: pointer;
          height: 21px;
          width: 21px;
          left: 0;
          position: absolute;
          top: 0;
          
        }
        .checkbox-round label:after {
          border: 2px solid #fff;
          border-top: none;
          border-right: none;
          content: "";
          height: 6px;
          left: 5px;
          opacity: 0;
          position: absolute;
          top: 6px;
          transform: rotate(-45deg);
          width: 12px;
        }
        
        .checkbox-round input[type="checkbox"] {
          visibility: hidden;
        }
        
        .checkbox-round input[type="checkbox"]:checked + label {
          background-color: #66bb6a;
          border-color: #66bb6a;
        }
        
        .checkbox-round input[type="checkbox"]:checked + label:after {
          opacity: 1;
        }
        
        .upload-section {
          display: flex;
          justify-content: space-between;
          padding-top: 19px;
        }
        .upload-section-main {
          display: flex;
          width: 464px;
          height: 148px;
          padding-top: 20px;
          padding-bottom: 40px;
          padding-right: 20px;
          padding-left: 20px;
          border-color: rgba(0, 0, 0, 1);
          border-width: 1px;
          border-style: solid;
          background-color: rgba(255, 255, 255, 1);
        }
        .upload-section label {
          width: 99px;
          color: rgba(255, 255, 255, 1);
          font-size: 18px;
          font-family: Mplus 1p Bold, sans-serif;
         
        }
        .upload-box {
          background-color: white;
          display: flex;
          flex-direction: column;
          width: 221px;
          height: 78px;
          border: none
          position: relative;
          border-radius: 7px;
        }
        
        .drag-text h1 {
          position: static;
          width: 410px;
          height: 60px;
          left: 10px;
          top: 10px;

          font-family: Mplus 1p Bold;
          font-style: normal;
          font-weight: bold;
          font-size: 20px;
          line-height: 30px;
          text-align: center;

          color: #949494;
        }
        .drag-text h3 {
          color: #C4C4C4;
          font-family: Mplus 1p Bold;
          font-style: normal;
          font-weight: bold;
          font-size: 12px;
          line-height: 18px;
          width: 187px;
          height: 53px;
          padding-left: 20px;
        }
          .file-upload-input {
          position: absolute;
          margin: 0;
          padding: 0;
          width: 221px;
          height: 78px;
          outline: none;
          opacity: 0;
          cursor: pointer;
        }
        .file-upload-input-main {
          position: absolute;
          margin: 0;
          padding: 0;
          width: 464px;
          height: 148px;
          outline: none;
          opacity: 0;
          cursor: pointer;
        }
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
        .drag-drop {
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
        .upload-button {
         
          justify-content: center;
          padding-top: 7px;
          padding-bottom: 7px;
          padding-right: 17px;
          padding-left: 17px;
          border: none;
          background-color: rgba(255, 255, 255, 1);
          margin-left: auto;
          margin-right: auto;
          margin-top: auto;
          margin-bottom: auto;
          cursor: pointer;
          

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
