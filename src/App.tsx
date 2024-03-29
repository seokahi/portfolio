
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import MainPage from './page/MainPage';
import HomePage from './page/HomePage';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Navigate to={'home'} />} />
        <Route path="/" element={<MainPage />}>
          <Route path="home" element={<HomePage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
