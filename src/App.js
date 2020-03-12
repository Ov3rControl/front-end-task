import React from 'react';
import './App.css';
import Header from './components/layout/Header';
import Hero from './components/layout/Hero';
import SessionCard from './components/layout/SessionCard';
function App() {
  return (
    <div className="App">
      <Header />
      <Hero />
      <SessionCard />
    </div>
  );
}

export default App;
