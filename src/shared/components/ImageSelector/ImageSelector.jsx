import React, { useState } from 'react';

import "./ImageSelector.css"

import EmptyImage from "../../assets/empty.jpg" 

const ImageSelection = ({onChange, name, initial}) => {
  const [selectedImage, setSelectedImage] = useState(()=>{
       if(initial){
            return initial
       }
       return null
  });

  const handleImageChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        setSelectedImage(reader.result);
      };
      reader.readAsDataURL(file);
    }

    const form = new FormData()

    form.append("file", file)

    fetch('http://localhost:8000/test/editor/upload/', {
      method:"POST",
      body:form
    }).then((response=>response.json())).then((data)=>{
      onChange(data)
    }).catch((err)=>console.log(err))

  };

  return (
    <div className='image-selector-wrapper'>
      <input type="file" accept="image/*" name={name} onChange={handleImageChange} className='image-selector-form' />
      {selectedImage && (
        <img src={selectedImage ? selectedImage: EmptyImage } alt="Selected"  className="current-image-selector" />
      )}
    </div>
  );
};

export default ImageSelection;