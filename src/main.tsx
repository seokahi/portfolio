import ReactDOM from 'react-dom';
import App from './App';
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import rootReducer from './modules/RootReducer';
import Style from './resource/style/style';

const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
  devTools: process.env.NODE_ENV !== 'production',
});

ReactDOM.render(
  <Provider store={store}>
    <Style />
    <App />
  </Provider>,
  document.getElementById('root')
);