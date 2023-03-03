import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { allAccessories, allBackgrounds, allEars, allEyes, allHair, allLeg, allMouth, allNeck, nose } from '../imagecontainer/imports';

import './alpacaImage.css';

function AlpacaImage() {

  /*  With the help of state I don't need any imageContainer, I can render 
  everything from here. From styles I will through change to state and from state I'll catch here and thus render the change on website on-time. That's it project is done🙂🙂.
  */

  const { accessories, backgrounds, ears, eyes, hair, leg, mouth, neck } = useSelector((state) => state.accessorize);

  /*
    useEffect(() => {
      console.log(accessories, backgrounds, ears, eyes, hair, leg, mouth, neck);
  
    }, [accessories, backgrounds, ears, eyes, hair, leg, mouth, neck]);
  */
  /*
    console.log(selectedButton, selectedStyle);
  console.log(allBackgrounds[backgrounds]);
  */
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
        <div className="images backgrounds">
          <img src={allBackgrounds[backgrounds]} alt="backgrounds" />
        </div>
        <div className="images accessories">
          <img src={allAccessories[accessories]} alt="accessories" />
        </div>
        <div className="images ears">
          <img src={allEars[ears]} alt="ears" />
        </div>
        <div className="images eyes">
          <img src={allEyes[eyes]} alt="eyes" />
        </div>
        <div className="images hair">
          <img src={allHair[hair]} alt="hair" />
        </div>
        <div className="images leg">
          <img src={allLeg[leg]} alt="leg" />
        </div>
        <div className="images mouth">
          <img src={allMouth[mouth]} alt="mouth" />
        </div>
        <div className="images neck">
          <img src={allNeck[neck]} alt="neck" />
        </div>
        <div className="images nose">
          <img src={nose} alt="nose" />
        </div>
      </div>
    </div>
  );
}

export default AlpacaImage;