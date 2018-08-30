import React, { Component } from 'react';
import Header from './components/Header';
import Slideshow from './components/Slideshow';
import ProductsList from './components/ProductsList';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Slideshow />
        <ProductsList />
      </div>
    );
  }
}

export default App;
