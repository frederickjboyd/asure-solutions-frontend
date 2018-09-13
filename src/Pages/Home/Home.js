import React, { Component } from 'react';
import Slideshow from './Slideshow';
import ProductsList from './ProductsList';

export default class Home extends Component {
  render() {
    return (
      <div>
        <Slideshow />
        <ProductsList />
      </div>
    );
  }
}
