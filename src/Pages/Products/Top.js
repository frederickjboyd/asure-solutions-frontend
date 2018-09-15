import React, { Component } from 'react';
import './Top.css';
import LTD from '../../assets/products/LTD.png';

export default class Top extends Component {
  render() {
    return (
      <div className="topContainer">
        <h1>Quick Draw Light and Timing Device</h1>
        <div className="imgContainer">
          <img src={LTD} alt="Quick Draw Light and Timing Device" />
        </div>
      </div>
    );
  }
}
