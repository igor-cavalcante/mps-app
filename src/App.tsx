import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css'
import LoginPage from './pages/Auth/Login';
import RegisterPage from './pages/Auth/Register';
import Homepage from './pages/Home';
import VideoPages from './pages/VideoPages';

function App() {
  

  return (
    <BrowserRouter>      
      <Routes>
        <Route path="/login" element={<LoginPage/>} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/videos" element={<VideoPages/>}/>
        <Route path="/" element={<Homepage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App
