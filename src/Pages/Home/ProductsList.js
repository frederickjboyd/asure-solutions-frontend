import React, { Component } from 'react';
import './ProductsList.css';
import { Link } from 'react-router-dom';
import LTD from '../../assets/products/LTD.png';

export default class ProductsList extends Component {
  render() {
    return (
      <div className="listContainer">
        <h1>Quick Draw Light and Timing Device</h1>
        <div className="imageContainer">
          <Link to="/products">
            <img src={LTD} alt="Light and Timing Device" />
          </Link>
        </div>
      </div>
    );
  }
}
