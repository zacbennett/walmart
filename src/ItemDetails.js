import React, { Component } from 'react';
import ItemCard from './ItemCard'

class ItemDetails extends Component {
  render() {
    let listOfItems = this.props.items.map(item => <ItemCard key={item.sku} {...item}/>)
    return (
      <div className="ItemDetails">
        {listOfItems}
        
      </div>
    );
  }
}

export default ItemDetails;
