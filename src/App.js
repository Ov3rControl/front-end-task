import React from 'react';
import './App.css';
import Header from './components/layout/Header';
import Hero from './components/layout/Hero';
import SessionCard from './components/layout/SessionCard';
import Footer from './components/layout/Footer';

function App() {
  return (
    <div className="App">
      <Header />
      <Hero />
      <SessionCard />
      <Footer />
    </div>
  );
}

export default App;
