import React, { Component } from 'react';
import './TechnicalDetails.css';
import { LTD_TECHNICAL_DETAILS } from '../../shared/constants/productDetails';

export default class TechnicalDetails extends Component {
  render() {
    return (
      <div className="technicalDetailsContainer">
        <h1>Technical Details</h1>
        {LTD_TECHNICAL_DETAILS.map((item, index) => {
          let divStyle;
          index % 2 === 0 ? (divStyle = 'rowWhite') : (divStyle = 'rowGrey');
          return (
            <div className={divStyle}>
              <p>{item.metric}</p>
              <p>{item.value}</p>
            </div>
          );
        })}
      </div>
    );
  }
}
