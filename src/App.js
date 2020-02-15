import React from 'react';
import './App.css';
import Header from './Header';
import Navbar from './Navbar';
import Profile from './Profile';

const App = () => {
  return (
    <div className="app-wrapper">
      <Header />
      <Navbar />
      <Profile />
    </div>
  );
};

export default App;
