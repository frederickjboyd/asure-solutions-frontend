import React, { Component } from 'react';
import './Products.css';
import Top from './Top';
import Details from './Details';
import Instructions from './Instructions';
import TechnicalDetails from './TechnicalDetails';

export default class Products extends Component {
  render() {
    return (
      <div className="productsContainer">
        <Top />
        <Details />
        <Instructions />
        <TechnicalDetails />
      </div>
    );
  }
}
