import React, { Component } from 'react';
import './About.css';
import GroupPhoto from '../../assets/group-photo.png';

export default class About extends Component {
  render() {
    return (
      <div className="aboutContainer">
        <div className="groupPhotoContainer">
          <img src={GroupPhoto} alt="Group" className="groupPhoto" />
        </div>
        <div className="aboutDescriptionContainer">
          <h2>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur.
          </h2>
        </div>
      </div>
    );
  }
}
