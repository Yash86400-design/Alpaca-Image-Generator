import { createSlice } from '@reduxjs/toolkit';

const accessorizeSlice = createSlice({
  name: 'accessorize',
  initialState: {
    selectedButton: 'hair',
  },
  reducers: {
    setSelectedButton: (state, action) => {
      state.selectedButton = action.payload;
    }
  }
});

export const { setSelectedButton } = accessorizeSlice.actions;
export default accessorizeSlice.reducer;