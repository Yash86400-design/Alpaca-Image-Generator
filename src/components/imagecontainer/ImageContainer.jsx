import React from 'react';
import images from './imports';
import './imageContainer.css';

function ImageContainer({ accessories, backgrounds, ears, eyes, hair, leg, mouth, neck }) {

  return (
    <div className='alpaca'>
      {backgrounds === '' && (
        <img src={images.darkblue50} alt="background" />
      )}
      {/* after that I can addStyle and all that properties while user clicked on something... */}
      <img src="" alt="" />
      <img src="" alt="" />
      <img src="" alt="" />
      <img src="" alt="" />
      <img src="" alt="" />
      <img src="" alt="" />
      <img src="" alt="" />
    </div>
  );
}

export default ImageContainer;