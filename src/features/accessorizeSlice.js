import { createSlice } from '@reduxjs/toolkit';

const accessorizeSlice = createSlice({
  name: 'accessorize',
  initialState: {
    selectedButton: 'hair',
    defaultState: true,
  },
  reducers: {
    setSelectedButton: (state, action) => {
      state.selectedButton = action.payload;
      state.defaultState = false;
    }
  }
});

export const { setSelectedButton } = accessorizeSlice.actions;
export default accessorizeSlice.reducer;