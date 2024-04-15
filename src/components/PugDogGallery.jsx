import React, { useState } from 'react';
import axios from 'axios';

const PugDogGallery = () => {
  const [dogImages, setDogImages] = useState([]);

  const fetchPugImages = async () => {
    try {
      const response = await axios.get('https://dog.ceo/api/breed/pug/images');
      const { message } = response.data;
      setDogImages(message);
    } catch (error) {
      console.error('Error fetching Pug images:', error);
    }
  };

  const handleDeleteImage = (imageUrl) => {
    const updatedImages = dogImages.filter((image) => image !== imageUrl);
    setDogImages(updatedImages);
  };

  return (
    <div>
      <button onClick={fetchPugImages}>Cargar Imágenes de Pugs</button>
      <div style={{ display: 'flex', flexWrap: 'wrap' }}>
        {dogImages.map((imageUrl, index) => (
          <div key={index} style={{ margin: '10px' }}>
            <img src={imageUrl} alt={`Pug ${index}`} width="200" height="200" />
            <button onClick={() => handleDeleteImage(imageUrl)}>Eliminar</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PugDogGallery;
