import React, { Component } from 'react';
import './ItemCard.css'
class ItemCard extends Component {
  render() {
    return (
      <div className="ItemCard">
        <img src={this.props.image} alt="" />
        <p id="title"> {this.props.title}</p>
        <p id="price"> ${this.props.price}</p>
        <p id="qty"> Qty: {this.props.qty}</p>
        <p id="price-slash"> ${this.props.priceSlash}</p>
      </div>
    );
  }
}

export default ItemCard;
