
import { combineReducers } from '@reduxjs/toolkit';
import { homeSlice } from './homeSlice';

const rootReducer = combineReducers({
  home: homeSlice.reducer,
});

export default rootReducer;

export type RootState = ReturnType<typeof rootReducer>;