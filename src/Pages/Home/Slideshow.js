import React, { Component } from 'react';
import './Slideshow.css';
import slideshow1 from '../../assets/slideshow/slideshow1.png';

export default class Slideshow extends Component {
  render() {
    return (
      <div className="slideshowContainer">
        <div className="imageText">
          <p>
            We're bringing innovative solutions to the competitive knife
            throwing scene.
          </p>
        </div>
        <img src={slideshow1} alt="slideshow1" className="slideshow" />
      </div>
    );
  }
}
