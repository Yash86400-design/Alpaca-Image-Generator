import React from 'react';
import { useDispatch } from 'react-redux';
import { setSelectedButton } from '../../features/accessorizeSlice';
import './accessorize.css';

function Accessorize() {
  const dispatch = useDispatch();

  const handleClick = (event) => {
    const { name } = event.target;
    // <AccessorizeStyle buttonName={name} />
    dispatch(setSelectedButton(name));
  };
  return (
    <div className='accessorize__container'>
      <h4>Accessorize the alpaca's</h4>
      <div className="accessorize__buttons-container">
        <button className='custom__buttons' name='hair' onClick={handleClick} value={'hair'}>Hair</button>
        <button className='custom__buttons' name='ears' onClick={handleClick} value={'ears'}>Ears</button>
        <button className='custom__buttons' name='eyes' onClick={handleClick} value={'eyes'}>Eyes</button>
        <button className='custom__buttons' name='mouth' onClick={handleClick} value={'mouth'}>Mouth</button>
        <button className='custom__buttons' name='neck' onClick={handleClick} value={'neck'}>Neck</button>
        <button className='custom__buttons' name='leg' onClick={handleClick} value={'leg'}>Leg</button>
        <button className='custom__buttons' name='accessories' onClick={handleClick} value={'accessories'}>Accessories</button>
        <button className='custom__buttons' name='background' onClick={handleClick} value={'background'}>Background</button>
        {/* {selectedButton && <AccessorizeStyle buttonName={selectedButton} />} */}
        {/* <SelectedButtonContext.Provider value={selectedButton}>
          {selectedButton && <AccessorizeStyle />}
        </SelectedButtonContext.Provider> */}
      </div>
    </div>
  );
}
export default Accessorize;