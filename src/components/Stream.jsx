import React, { useState, useEffect } from 'react';

function Stream() {
  const [streams, setStreams] = useState([]);

  useEffect(() => {
    // Fetch active streams from the backend
    fetchStreams();
  }, []);

  const fetchStreams = async () => {
    try {
      const response = await fetch('/api/streams');
      const data = await response.json();
      setStreams(data);
    } catch (error) {
      console.error('Error fetching streams:', error);
    }
  };

  return (
    <div className="stream-container">
      <h2>Live Fitness Streams</h2>
      <div className="stream-grid">
        {streams.map(stream => (
          <div key={stream.id} className="stream-card">
            <img src={stream.thumbnail} alt={stream.title} />
            <h3>{stream.title}</h3>
            <p>{stream.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Stream;
