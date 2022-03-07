export default function MyComponent(props) {
  return (
    <div className="div">
      <div className="text-area">
        <div className="text">Name</div>
        <div className="text-spacing" />
      </div>
      <div className="text-area">
        <div className="text">Short Description</div>
        <div className="text-spacing" />
      </div>
      <div className="upload-group">
        <div className="upload">Thumbnail</div>
        <div className="drag-drop">
          Drag & drop any image file or click to browse files on your computer
        </div>
        <div className="thumbnail-banner-spacing" />
      </div>
      <div className="upload-group">
        <div className="upload">Banner</div>
        <div className="drag-drop">
          Drag & drop any image file or click to browse files on your computer
        </div>
        <div className="div-9" />
      </div>
      <div className="text-area">
        <div className="text">Keywords</div>
        <div className="plus-button">+</div>
      </div>
      <div className="radio-button">
        <div className="radio-spacing" />
        <div className="radio-text">Encrypt file(s)</div>
      </div>
      <div className="radio-button">
        <div className="radio-spacing" />
        <div className="radio-text">Compress</div>
      </div>
      <div className="radio-button">
        <div className="radio-spacing" />
        <div className="radio-text">Upload as unlisted</div>
      </div>
    </div>
  );
}
