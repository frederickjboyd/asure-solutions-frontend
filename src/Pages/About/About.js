import React, { Component } from 'react';
import './About.css';
import GroupPhoto from '../../assets/group-photo.png';

export default class About extends Component {
  render() {
    return (
      <div className="aboutContainer">
        <div className="groupPhotoContainer">
          <img src={GroupPhoto} alt="Group" />
        </div>
        <div className="aboutDescriptionContainer">
          <h2>
            We are a group of second year engineering students from the
            University of Toronto, with the ultimate goal of making a positive
            and meaningful impact on the community. With the key focus on
            accessibility, our team will collaborate with you to explore
            potential opportunities for engineering design. Following that, we
            will apply our team members’ distinct values, beliefs, and skill
            sets to carry out an innovative solution to enhance your community’s
            experience.
          </h2>
        </div>
      </div>
    );
  }
}
