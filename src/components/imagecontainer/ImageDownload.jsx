import React from 'react';
import { useDispatch } from 'react-redux';
import { allAccessories, allBackgrounds, allEars, allEyes, allHair, allLeg, allMouth, allNeck } from '../../components/imagecontainer/imports';
import { setRandomImage } from '../../features/accessorizeSlice';
import './imageDownload.css';

function ImageDownload() {
  const dispatch = useDispatch();
  const handleClick = () => {
    // I have to set the values of all the 8 things...
    let newAccessories, newBackground, newEar, newEye, newHair, newLeg, newMouth, newNeck;

    let accessoriesKey = Object.keys(allAccessories);
    let accessoriesIndex = Math.floor(Math.random() * accessoriesKey.length);
    newAccessories = accessoriesKey[accessoriesIndex];

    let backgroundsKey = Object.keys(allBackgrounds);
    let backgroundsIndex = Math.floor(Math.random() * backgroundsKey.length);
    newBackground = backgroundsKey[backgroundsIndex];

    let earKey = Object.keys(allEars);
    let earIndex = Math.floor(Math.random() * earKey.length);
    newEar = earKey[earIndex];

    let eyeKey = Object.keys(allEyes);
    let eyeIndex = Math.floor(Math.random() * eyeKey.length);
    newEye = eyeKey[eyeIndex];

    let hairKey = Object.keys(allHair);
    let hairIndex = Math.floor(Math.random() * hairKey.length);
    newHair = hairKey[hairIndex];

    let legKey = Object.keys(allLeg);
    let legIndex = Math.floor(Math.random() * legKey.length);
    newLeg = legKey[legIndex];
    // let randomValue = allAccessories[randomKey];

    let mouthKey = Object.keys(allMouth);
    let mouthIndex = Math.floor(Math.random() * mouthKey.length);
    newMouth = mouthKey[mouthIndex];
    // let randomValue = allAccessories[randomKey];

    let neckKey = Object.keys(allNeck);
    let neckIndex = Math.floor(Math.random() * neckKey.length);
    newNeck = neckKey[neckIndex];
    // let randomValue = allAccessories[randomKey];

    dispatch(setRandomImage({ newAccessories, newBackground, newEar, newEye, newHair, newLeg, newMouth, newNeck }));
    // console.log(newAccessories, newBackground, newEar, newEye, newHair, newLeg, newMouth, newNeck);
    // newBackground = newBackground[Math.floor(Math.random() * (Object.keys(allBackgrounds).length))];
    // newBackground = newBackground[Math.floor(Math.random() * (Object.keys(allAccessories).length))];
    // newAccessories = newAccessories[Math.floor(Math.random() * (Object.keys(allAccessories).length))];
    // newAccessories = newAccessories[Math.floor(Math.random() * (Object.keys(allAccessories).length))];
    // newAccessories = newAccessories[Math.floor(Math.random() * (Object.keys(allAccessories).length))];
    // newAccessories = newAccessories[Math.floor(Math.random() * (Object.keys(allAccessories).length))];
  };

  return (
    <div className="buttons__container">
      <button type='button' onClick={handleClick}>Random</button>
      <button type='button'>Download</button>
    </div>
  );
}

export default ImageDownload;