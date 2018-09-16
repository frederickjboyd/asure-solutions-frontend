import React, { Component } from 'react';
import './Contact.css';
import GroupPhoto from '../../assets/group-photo.png';

export default class Contact extends Component {
  render() {
    return (
      <div className="contactContainer">
        <img src={GroupPhoto} alt="Group" />
        <h1>asure.solutions@outlook.com</h1>
      </div>
    );
  }
}
