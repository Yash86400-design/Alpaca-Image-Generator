import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
// import ImageContainer from '../imagecontainer/ImageContainer';
import './alpacaImage.css';

function AlpacaImage() {

  /*
  With the help of state I don't need any imageContainer, I can render everything from here. From styles I will through change to state and from state I'll catch here and thus render the change on website on-time. That's it project is done🙂🙂.
  */

  const { accessories, backgrounds, ears, eyes, hair, leg, mouth, neck, nose } = useSelector((state) => state.accessorize);

  // console.log(accessories);

  /*
  const defaultValues = {
    accessories: '',
    backgrounds: '',
    ears: 'default',
    eyes: 'default',
    hair: 'default',
    leg: 'default',
    mouth: 'default',
    neck: 'default',
    nose: 'nose'
  };
  
    const bhai = useSelector((state) => state.downloadImgSlice.subject);
    console.log(bhai);
  */

  return (
    <div className="container">
      <div className="image__container">
        {/*  
        <ImageContainer accessories={defaultValues.accessories} backgrounds={defaultValues.backgrounds} ears={defaultValues.ears} eyes={defaultValues.eyes} hair={defaultValues.hair} leg={defaultValues.leg} mouth={defaultValues.mouth} neck={defaultValues.neck} nose={defaultValues.nose} />
        */}

        <img src="" alt="accessories" />
        <img src="" alt="backgrounds" />
        <img src="" alt="ears" />
        <img src="" alt="eyes" />
        <img src="" alt="hair" />
        <img src="" alt="leg" />
        <img src="" alt="mouth" />
        <img src="" alt="neck" />
        <img src="" alt="nose" />
      </div>
      <div className="buttons__container">
        <button type='button'>Random</button>
        <button type='button'>Download</button>
      </div>
    </div>
  );
}

export default AlpacaImage;