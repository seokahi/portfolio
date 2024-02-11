import { createSlice } from '@reduxjs/toolkit';

export const homeSlice = createSlice({
  name: 'home',
  initialState: {
    current: "INTRO",
  },
  reducers: {
    setCurrent: (state, action) => {
      state.current = action.payload;
    },
  },
});

export const { setCurrent } = homeSlice.actions;
export default homeSlice.reducer;

