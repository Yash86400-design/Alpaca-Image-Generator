import React, { useState } from 'react';
import './accessorizeStyle.css';
import { accessories, background, ears, eyes, hair, leg, mouth, neck } from '../imagecontainer/imports';
import { useSelector } from 'react-redux';

function AccessorizeStyle() {
  const buttonName = useSelector((state) => state.accessorize.selectedButton);
  const [activeButton, setActiveButton] = useState('');
  let value;

  switch (buttonName) {
    case 'accessories':
      value = accessories;
      break;

    case 'background':
      value = background;
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
  // Now the problem is to render all the buttons...

  // Object.keys(backgrounds).forEach(key => { console.log(key); });
  return (
    <div className='alpaca__style-container'>
      <h4>Style</h4>
      {Object.keys(value).map((button) => (
        <button key={button} className={button === activeButton ? 'custom__buttons active' : 'custom__buttons'} onClick={() => setActiveButton(button)}>{button}</button>
      ))}
    </div>
  );
};

export default AccessorizeStyle;