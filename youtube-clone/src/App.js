import { createContext,useState } from 'react';
import { Routes, Route } from 'react-router';
import './App.css';
import Home from './pages/Home';
import VideoPage from './pages/VideoPage/VideoPage';
export const VideoName=createContext();
function App() {
  const [globalState,setGlobalState]=useState('');
  return (
    <VideoName.Provider value={{globalState,setGlobalState}}>
    <div className="App">
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/video' element={<VideoPage />} />
        <Route />
      </Routes>
    </div>
    </VideoName.Provider>
  );
}

export default App;
