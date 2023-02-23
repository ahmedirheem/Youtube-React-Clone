import { Routes, Route } from 'react-router';
import './App.css';
import Home from './pages/Home';
import VideoPage from './pages/VideoPage/VideoPage';
function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/video' element={<VideoPage />} />
        <Route />
      </Routes>
    </div>
  );
}

export default App;
