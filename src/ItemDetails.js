import React, { Component } from 'react';
import './PriceSideBar.css';

class ItemDetails extends Component {
  render() {
    return (
      <div className="ItemDetails">
        <img src="" alt="" />
        <p id="title"> Item Title</p>
        <p id="price"> $99.11</p>
        <p id="qty"> 102.96</p>
        <p id="price-slash"> Qty:1</p>
      </div>
    );
  }
}

export default ItemDetails;
