import React, { Component } from 'react';
import ItemCard from './ItemCard'

class ItemDetails extends Component {
  render() {
    let listOfItems = this.props.items.map(item => <ItemCard key={item.sku} {...item}/>)
    return (
      <div className="ItemDetails">
        {listOfItems}
        {/* <img src="" alt="" />
        <p id="title"> Item Title</p>
        <p id="price"> $99.11</p>
        <p id="qty"> 102.96</p>
        <p id="price-slash"> Qty:1</p> */}
      </div>
    );
  }
}

export default ItemDetails;
