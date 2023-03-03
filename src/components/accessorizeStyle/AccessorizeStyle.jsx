import React, { useEffect, useState } from 'react';
import './accessorizeStyle.css';
import { allAccessories, allBackgrounds, allEars, allEyes, allHair, allLeg, allMouth, allNeck } from '../imagecontainer/imports';
import { useDispatch, useSelector } from 'react-redux';
import { changeImage, setStyle } from '../../features/accessorizeSlice';

function AccessorizeStyle() {
  const buttonName = useSelector((state) => state.accessorize.selectedButton);

  const defaultStyle = useSelector((state) => state.accessorize.selectedStyle);

  const [activeButton, setActiveButton] = useState(defaultStyle);

  const dispatch = useDispatch();


  // useState(() => {
  //   setActiveButton('');
  // }, [defaultStyle]);

  let value;
  switch (buttonName) {
    case 'accessories':
      value = allAccessories;
      break;

    case 'backgrounds':
      value = allBackgrounds;
      break;

    case 'ears':
      value = allEars;
      break;

    case 'eyes':
      value = allEyes;
      break;

    case 'hair':
      value = allHair;
      break;

    case 'leg':
      value = allLeg;
      break;

    case 'mouth':
      value = allMouth;
      break;

    case 'neck':
      value = allNeck;
      break;

    default:
      break;
  }

  // console.log(activeButton);
  useEffect(() => {
    dispatch(changeImage({ key: buttonName, value: activeButton }));
    dispatch(setStyle(activeButton));
  }, [activeButton, dispatch]);

  // console.log(buttonName, activeButton);

  /*
  Now the problem is to render all the buttons...
  
  Object.keys(backgrounds).forEach(key => { console.log(key); });
  */
  return (
    <div className='alpaca__style-container'>
      <h4>Style</h4>
      {/*
          It's inside the map function..
       <button key={button} className={button === activeButton ? 'custom__buttons active' : 'custom__buttons'} onClick={() => setActiveButton(button)}>{button}</button> 
       
       */}
      {Object.keys(value).map((button) => (
        <button key={button} className={`custom__buttons ${button === activeButton ? 'active' : ''}`} onClick={() => setActiveButton(button)}>{button}</button>
      ))}
    </div>
  );
};

export default AccessorizeStyle;