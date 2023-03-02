import React, { useEffect, useState } from 'react';
import './accessorizeStyle.css';
import { accessories, backgrounds, ears, eyes, hair, leg, mouth, neck } from '../imagecontainer/imports';
import { useDispatch, useSelector } from 'react-redux';
import { changeImage } from '../../features/accessorizeSlice';

function AccessorizeStyle() {
  const buttonName = useSelector((state) => state.accessorize.selectedButton);

  const defaultStyle = useSelector((state) => state.accessorize.selectedStyle);

  const [activeButton, setActiveButton] = useState(defaultStyle);

  const dispatch = useDispatch();


  // useState(() => {
  //   setActiveButton('');
  // }, []);

  let value;
  switch (buttonName) {
    case 'accessories':
      value = accessories;
      break;

    case 'background':
      value = backgrounds;
      break;

    case 'ears':
      value = ears;
      break;

    case 'eyes':
      value = eyes;
      break;

    case 'hair':
      value = hair;
      break;

    case 'leg':
      value = leg;
      break;

    case 'mouth':
      value = mouth;
      break;

    case 'neck':
      value = neck;
      break;

    default:
      break;
  }

  // console.log(defaultStyle);

  useEffect(() => {
    dispatch(changeImage({ key: buttonName, value: activeButton }));
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