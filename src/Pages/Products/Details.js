import React, { Component } from 'react';
import './Details.css';
import { LTD_DETAILS } from '../../shared/constants/productDetails';

export default class Details extends Component {
  render() {
    let detailsContainer;

    return (
      <div>
        {LTD_DETAILS.map(item => {
          item.alignRight
            ? (detailsContainer = 'detailsContainerRight')
            : (detailsContainer = 'detailsContainer');
          return (
            <div className={detailsContainer}>
              <div className="detailWrapper">
                <div className="titleWrapper">
                  <img src={item.img} alt="icon" />
                  <h3>{item.title}</h3>
                </div>
                <p>{item.description}</p>
              </div>
            </div>
          );
        })}
      </div>
    );
  }
}
