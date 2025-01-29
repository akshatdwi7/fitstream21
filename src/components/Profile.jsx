import React, { useState, useEffect } from 'react';

function Profile() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    // Fetch user profile from the backend
    fetchUserProfile();
  }, []);

  const fetchUserProfile = async () => {
    try {
      const response = await fetch('/api/profile');
      const data = await response.json();
      setUser(data);
    } catch (error) {
      console.error('Error fetching user profile:', error);
    }
  };

  if (!user) return <div>Loading...</div>;

  return (
    <div className="profile">
      <h2>{user.name}'s Profile</h2>
      <img src={user.avatar} alt={user.name} className="profile-avatar" />
      <p>Fitness Goal: {user.fitnessGoal}</p>
      <p>Streams Completed: {user.streamsCompleted}</p>
    </div>
  );
}

export default Profile;
