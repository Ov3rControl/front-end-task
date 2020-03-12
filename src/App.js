import React, { Component } from 'react';
import { Provider } from 'react-redux';
import './App.css';
import store from './store';
import Header from './components/layout/Header';
import Hero from './components/layout/Hero';
import Sessions from './components/layout/Sessions';
import Footer from './components/layout/Footer';

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div className="App">
          <Header />
          <Hero />
          <Sessions />
          <Footer />
        </div>
      </Provider>
    );
  }
}

export default App;
