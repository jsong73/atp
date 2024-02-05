import React from "react";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import IntroPage from "./pages/IntroPage"
import ScreenshotDetection from './pages/ScreenshotDetection';
import VideoDetection from "./pages/VideoDetection";
import './App.css'


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/screenshot-detection" element={<ScreenshotDetection />} />
        <Route path="/video-detection" element={<VideoDetection />} />
        <Route path="/" element={<IntroPage />} />
      </Routes>
    </Router>
  )
}

export default App
