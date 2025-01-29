import React from 'react';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <div className="home">
      <h1>Welcome to FitStream</h1>
      <p>Stream your fitness journey and inspire others!</p>
      <Link to="/stream" className="cta-button">Start Streaming</Link>
    </div>
  );
}

export default Home;
