import React from 'react';
import Navbar from './NavBar';
import ThisWeeksTopPicks from './ThisWeeksTopPicks';
import YourRecommendations from './YourRecommendations';

export default function App() {
  return (
    <div>
        <Navbar />
        <ThisWeeksTopPicks />
        <YourRecommendations />
    </div>
    );
}
