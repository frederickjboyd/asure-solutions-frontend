import React, { Component } from 'react';
import './Details.css';
import { LTD_DETAILS } from '../../shared/constants/productDetails';

export default class Details extends Component {
  render() {
    let detailsContainer, titleWrapper;

    return (
      <div>
        {LTD_DETAILS.map(item => {
          if (item.alignRight) {
            detailsContainer = 'detailsContainerRight';
            titleWrapper = 'titleWrapperRight';
          } else {
            detailsContainer = 'detailsContainer';
            titleWrapper = 'titleWrapper';
          }
          // item.alignRight
          //   ? (detailsContainer = 'detailsContainerRight')
          //   : (detailsContainer = 'detailsContainer');
          return (
            <div className={detailsContainer}>
              <div className="detailWrapper">
                {item.alignRight ? (
                  <div className={titleWrapper}>
                    <h3>{item.title}</h3>
                    <img src={item.img} alt="icon" />
                  </div>
                ) : (
                  <div className={titleWrapper}>
                    <img src={item.img} alt="icon" />
                    <h3>{item.title}</h3>
                  </div>
                )}
                <p>{item.description}</p>
              </div>
            </div>
          );
        })}
      </div>
    );
  }
}
