
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import { Provider } from "react-redux";
import { configureStore } from "@reduxjs/toolkit";
import rootReducer from './modules/RootReducer.tsx';
import Style from './resource/style/style.tsx';


const store = configureStore({
  reducer: {rootReducer}, 
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});
ReactDOM.createRoot(document.getElementById('root')!).render(
  <Provider store={store}>
    <Style />
      <App />
  </Provider>
)
