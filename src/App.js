import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './NavBar';
import ThisWeeksTopPicks from './ThisWeeksTopPicks';
import YourRecommendations from './YourRecommendations';
import ContinueWatching from './ContinueWatching';

export default function App() {
  return (
      <Router>
        <div>
          <Navbar />
          <ThisWeeksTopPicks />
          <Routes>
            <Route path="/" element={<YourRecommendations />} />
            <Route path="/recommendations" element={<YourRecommendations />} />
            <Route path="/continue-watching" element={<ContinueWatching />} />
          </Routes>
        </div>
      </Router>
    );
}
