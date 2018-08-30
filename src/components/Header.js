import React, { Component } from 'react';
import './Header.css';
import logo from '../assets/logo.png';

export default class Header extends Component {
  render() {
    return (
      <div className="container">
        <img src={logo} alt="logo" className="logo" />
        <div>
          <a className="nav">home</a>
          <a className="nav">products</a>
          <a className="nav">about us</a>
          <a className="nav">contact</a>
        </div>
      </div>
    );
  }
}
