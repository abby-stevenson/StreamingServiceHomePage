import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './NavBar';
import ThisWeeksTopPicks from './ThisWeeksTopPicks';
import YourRecommendations from './YourRecommendations';
import ContinueWatching from './ContinueWatching';

/* Sets up the main page and set up the routes to the other pages so that the use can interact with the 
buttons and it will take then to the appropriate page */
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
