import React, { useState } from 'react';

import "./ImageSelector.css"

import EmptyImage from "../../assets/empty.jpg" 

const ImageSelection = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  const handleImageChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        setSelectedImage(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div className='image-selector-wrapper'>
      <input type="file" accept="image/*" onChange={handleImageChange} className='image-selector-form' />
      {selectedImage && (
        <img src={selectedImage ? selectedImage: EmptyImage } alt="Selected"  className="current-image-selector" />
      )}
    </div>
  );
};

export default ImageSelection;