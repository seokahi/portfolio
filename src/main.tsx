import ReactDOM from 'react-dom';
import App from './App';
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';

import Style from './resource/style/style';
import  homeSlice  from './reducer/homeSlice.tsx';

const store = configureStore({
  reducer: {
    home: homeSlice,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

ReactDOM.render(
  <Provider store={store}>
    <Style />
    <App />
  </Provider>,
  document.getElementById('root')
);