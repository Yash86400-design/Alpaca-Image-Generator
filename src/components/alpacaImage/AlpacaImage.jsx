import React from 'react';
import ImageContainer from '../imagecontainer/ImageContainer';
import './alpacaImage.css';

function AlpacaImage() {

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

  return (
    <div className="container">
      <div className="image__container">
        <ImageContainer accessories={defaultValues.accessories} backgrounds={defaultValues.backgrounds} ears={defaultValues.ears} eyes={defaultValues.eyes} hair={defaultValues.hair} leg={defaultValues.leg} mouth={defaultValues.mouth} neck={defaultValues.neck} nose={defaultValues.nose} />
      </div>
      <div className="buttons__container">
        <button type='button'>Random</button>
        <button type='button'>Download</button>
      </div>
    </div>
  );
}

export default AlpacaImage;