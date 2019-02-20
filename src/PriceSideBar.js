import React, { Component } from 'react';
import PromoCode from './PromoCode';
import ItemDetails from './ItemDetails';
import './PriceSideBar.css';
import {connect} from 'react-redux'
import { isNull } from 'util';


class PriceSideBar extends Component {
  constructor() {
    super();
    this.state = { showItemDetails: false, showPromoCode: false };

    this.handleClickItemDetail = this.handleClickItemDetail.bind(this)
    this.handleClickShowPromoCode = this.handleClickShowPromoCode.bind(this)
    this.applyPromoCode = this.applyPromoCode.bind(this)
  }

  handleClickShowPromoCode(){
    console.log(this.props.items)
    this.setState((state) => ({showPromoCode: !state.showPromoCode}))
  }

  handleClickItemDetail(){
    this.setState((state) => ({showItemDetails: !state.showItemDetails}))
  }

  applyPromoCode(code){
    console.log(code)
  }

  render() {
    return (
      <div className="PriceSideBar">
        <div id="price-info">
          <div>
            <p>Subtotal</p>
            <p>$Price</p>
          </div>
          <div>
            {/* TODO DIS */}
            <p>
              <u>Pickup savings</u>
            </p>
            <p>$Price</p>
          </div>
          <div>
            <p>Est taxes & fees</p>
            <p>$Taxes</p>
          </div>
          <hr />
          <div>
            <p>Est Total</p>
            <p>$108.03</p>
          </div>
        </div>
        <p onClick={this.handleClickItemDetail}>
          {this.state.showItemDetails
            ? `Hide item details -`
            : 'Show item details +'}
        </p>
          {this.state.showItemDetails && <ItemDetails />}
        <hr />
        <p onClick={this.handleClickShowPromoCode}>
          {this.state.showPromoCode
            ? 'Hide promo code -'
            : 'Apply promo code +'}
        </p>
        {this.state.showPromoCode && <PromoCode applyPromoCode={this.applyPromoCode}/>}
      </div>
    );
  }
}


function mapStateToProps(state){
  return {items:state.items}
}

// Replace null with actions you want to dispatch in {}
export default connect(mapStateToProps, isNull )(PriceSideBar)

