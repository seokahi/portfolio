// homeSlice.ts

import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface HomeState {
  current: string;
}

const initialState: HomeState = {
  current: "null",
};

export const homeSlice = createSlice({
  name: 'home',
  initialState,
  reducers: {
    setCurrent: (state, action: PayloadAction<string>) => {
      state.current = action.payload;
    },
  },
});

export const { setCurrent } = homeSlice.actions;
