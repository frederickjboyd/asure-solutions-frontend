import React, { Component } from 'react';
import './Slideshow.css';
import slideshow1 from '../../assets/slideshow/slideshow1.png';

export default class Slideshow extends Component {
  render() {
    return (
      <div className="slideshowContainer">
        <img src={slideshow1} alt="slideshow1" className="slideshow" />
        <div className="imageText">
          <p className="statementText">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          </p>
        </div>
      </div>
    );
  }
}
