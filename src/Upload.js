import React, { useState } from "react";
import './App.css'

// code thanks to Phoenix 1355 at
// https://stackoverflow.com/questions/58352763/how-do-i-fix-react-is-not-defined-no-undef
const UploadAndDisplayImage = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  return (
    <div class="App">
      <h1>Upload and Display Image using React Hook's</h1>
      {selectedImage && (
        <div>
        <img  alt="not found" width={"1000px"} src={URL.createObjectURL(selectedImage)} />
        <br />
        <button onClick={()=>setSelectedImage(null)}>Remove</button>
        </div>
      )}
      <br />
     
      <br /> 

      {/* file input which allows me to upload the file to the local host */}
      <input
        type="file"
        name="myImage"
        onChange={(event) => {
          console.log(event.target.files[0]);
          setSelectedImage(event.target.files[0]);
        }}
      />
    </div>
  );
};

export default UploadAndDisplayImage;