import React from 'react';
import { AlpacaImage, Accessorize, AccessorizeStyle } from './components';
import './App.css';
// import ImageDownload from './components/imagecontainer/ImageDownload';

function App() {
  return (
    <div className='app__container'>
      <h2>Alpaca Generator</h2>
      <div className="alpaca__container">
        <div className="alpaca__container-left">
          <AlpacaImage />
          {/* <ImageDownload /> */}
        </div>

        <div className="alpaca__container-right">
          <Accessorize />
          <AccessorizeStyle />
        </div>
      </div>
    </div>
  );
}

export default App;