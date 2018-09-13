import React, { Component } from 'react';
import './Header.css';
import { Link } from 'react-router-dom';
import logo from '../assets/logo.png';

export default class Header extends Component {
  render() {
    return (
      <div className="container">
        <Link to="/">
          <img src={logo} alt="logo" className="logo" />
        </Link>
        <div>
          <Link to="/" className="nav">
            home
          </Link>
          <Link to="/products" className="nav">
            products
          </Link>
          <Link to="/about" className="nav">
            about us
          </Link>
          <Link to="/contact" className="nav">
            contact
          </Link>
        </div>
      </div>
    );
  }
}
