import React from 'react';
import { useSelector } from 'react-redux';

const HomePage = () => {
  const { user } = useSelector((state) => state.auth);

  return (
    <div>
      <h1>Welcome to PROSUMER</h1>
      {user && (
        <p>Your role: {user.role}</p>
      )}
    </div>
  );
};

export default HomePage;