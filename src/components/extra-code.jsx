<div className="upload-group">
<label htmlFor="thumbnail"> Thumbnail: </label> 
<input accept="image/*" onChange={(e) => setAudioOptions({...audioOptions, thumbnail: e.target.files[0]})} type="file" name="thumbnail" id="thumbnail"/> 
</div>
<div className="upload-group">
   <label htmlFor="banner"> Banner: </label> 
   <input accept="image/*" onChange={(e) => setAudioOptions({...audioOptions, banner: e.target.files[0]})}  type="file" name="banner" id="banner"/> 
</div>