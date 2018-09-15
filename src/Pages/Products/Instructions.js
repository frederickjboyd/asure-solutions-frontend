import React, { Component } from 'react';
import './Instructions.css';

export default class Instructions extends Component {
  render() {
    return (
      <div className="instructionsContainer">
        <h1>How it Works</h1>
        <div className="yellowBox" />
        <div className="greenBox" />
        <p>Throw!</p>
        <div className="greyBox">
          <p id="time">1.27</p>
        </div>
      </div>
    );
  }
}
