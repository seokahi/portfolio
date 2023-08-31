import MainPage from './page/MainPage';
import { Route, Routes,BrowserRouter} from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainPage />}>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App
