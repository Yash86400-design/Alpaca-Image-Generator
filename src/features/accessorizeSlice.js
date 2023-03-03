import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  // For Accessorize container
  selectedButton: 'hair',
  selectedStyle: 'default',
  defaultState: true,

  // for Image Container
  accessories: 'default',
  backgrounds: 'default',
  ears: 'default',
  eyes: 'default',
  hair: 'default',
  leg: 'default',
  mouth: 'default',
  neck: 'default',
  // nose: 'default'
};

const accessorizeSlice = createSlice({
  name: 'accessorize',
  initialState,
  reducers: {
    setSelectedButton: (state, action) => {
      state.selectedButton = action.payload;
      state.defaultState = false;
    },
    changeImage: (state, action) => {
      // console.log(state.selectedStyle); 
      // console.log(action.payload); 
      const { key, value } = action.payload;
      /*
  state = {
    ...state,  // copy the current state
    [key]: value,
  };
  return state;
  */
      return {
        ...state,
        [key]: value,
      };
    },
    setStyleDefault: (state) => {
      state.selectedStyle = '';
    },
    setStyle: (state, action) => {
      state.selectedStyle = action.payload;
    },
    setRandomImage: (state, action) => {
      const { newAccessories, newBackground, newEar, newEye, newHair, newLeg, newMouth, newNeck } = action.payload;
      state.accessories = newAccessories;
      state.backgrounds = newBackground;
      state.ears = newEar;
      state.eyes = newEye;
      state.hair = newHair;
      state.leg = newLeg;
      state.mouth = newMouth;
      state.neck = newNeck;
    }
  },
});

export const { setSelectedButton, changeImage, setStyleDefault, setStyle, setRandomImage } = accessorizeSlice.actions;
export default accessorizeSlice.reducer;