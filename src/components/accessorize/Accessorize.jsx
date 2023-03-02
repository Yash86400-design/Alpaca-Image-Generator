import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setSelectedButton, setStyleDefault } from '../../features/accessorizeSlice';
import './accessorize.css';

const accessorizeNames = [
  'hair', 'ears', 'eyes', 'mouth', 'neck', 'leg', 'accessories', 'background'
];

function Accessorize() {
  const dispatch = useDispatch();
  const [activeButton, setActiveButton] = useState('');
  const defaultState = useSelector((state) => state.accessorize.defaultState);

  const handleClick = (event) => {
    const { name } = event.target;
    // <AccessorizeStyle buttonName={name} />
    setActiveButton(name);
    dispatch(setSelectedButton(name));
    dispatch(setStyleDefault());
  };

  useEffect(() => {
    const container = document.getElementById('accessorize__container');
    const firstButton = container.querySelector('button');

    if (defaultState) {
      firstButton.classList.add('active');
    }
    else {
      firstButton.classList.remove('active');
    }
  }, [defaultState]);

  return (
    <div className='accessorize__container'>
      <h4>Accessorize the alpaca's</h4>
      <div className="accessorize__buttons-container" id='accessorize__container'>
        {
          /* 
        <button className={defaultState === true ? 'custom__buttons active' : 'custom__buttons'} name='hair' onClick={handleClick} value={'hair'}>Hair</button>
        <button className='custom__buttons' name='ears' onClick={handleClick} value={'ears'}>Ears</button>
        <button className='custom__buttons' name='eyes' onClick={handleClick} value={'eyes'}>Eyes</button>
        <button className='custom__buttons' name='mouth' onClick={handleClick} value={'mouth'}>Mouth</button>
        <button className='custom__buttons' name='neck' onClick={handleClick} value={'neck'}>Neck</button>
        <button className='custom__buttons' name='leg' onClick={handleClick} value={'leg'}>Leg</button>
        <button className='custom__buttons' name='accessories' onClick={handleClick} value={'accessories'}>Accessories</button>
        <button className='custom__buttons' name='background' onClick={handleClick} value={'background'}>Background</button> 
        */
        }
        {accessorizeNames.map((name) => (
          <button className={name === activeButton ? 'custom__buttons active' : 'custom__buttons'} key={name} name={name} value={name} onClick={handleClick}>{name}</button>
        ))}
        {/* {selectedButton && <AccessorizeStyle buttonName={selectedButton} />} */}
        {/* <SelectedButtonContext.Provider value={selectedButton}>
          {selectedButton && <AccessorizeStyle />}
        </SelectedButtonContext.Provider> */}
      </div>
    </div>
  );
}
export default Accessorize;