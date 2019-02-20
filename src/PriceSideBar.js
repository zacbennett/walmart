import React, { Component } from 'react';
import PromoCode from './PromoCode';
import ItemDetails from './ItemDetails';
import './PriceSideBar.css';
import {changePromoCode, addPromoCode} from './Containers/actionCreators'
import { connect } from 'react-redux';

class PriceSideBar extends Component {
  constructor() {
    super();
    this.state = { showItemDetails: true, showPromoCode: false };

    this.handleClickItemDetail = this.handleClickItemDetail.bind(this);
    this.handleClickShowPromoCode = this.handleClickShowPromoCode.bind(this);
    this.addPromoCode = this.addPromoCode.bind(this);
    this.changePromoCode = this.changePromoCode.bind(this);
  }
  componentDidMount(){
    let subtotal = this.props.items.reduce(function(acc, curr) {
      return acc + curr.price;
    },0);
    let taxes = Number((subtotal * .1).toFixed(2))

    let estTotal = subtotal + taxes;
    
    this.setState({subtotal, taxes, estTotal})
  }

  componentDidUpdate(prevProps){
    if(prevProps.discount !== this.props.discount){
      let estTotal = this.state.estTotal * (1-this.props.discount)
      this.setState({ estTotal})
    }
  }

  handleClickShowPromoCode() {
    this.setState(state => ({ showPromoCode: !state.showPromoCode }));
  }

  handleClickItemDetail() {
    this.setState(state => ({ showItemDetails: !state.showItemDetails }));
  }
  addPromoCode() {
    this.props.addPromoCode()
  }
  changePromoCode(code) {
    this.props.changePromoCode(code)
  }

  render() {
    return (
      <div className="PriceSideBar">
        <div id="price-info">
          <div>
            <p>Subtotal</p>
            <p>${this.state.subtotal}</p>
          </div>
          <div>
            {/* TODO DIS */}
            <p>
              <u>Pickup savings</u>
            </p>
            <p id="pickup-savings">$3.92</p>
          </div>
          <div>
            <p>Est taxes & fees</p>
            <p>${this.state.taxes}</p>
          </div>
          <hr />
          <div id="est-total">
            <p>Est Total</p>
            <p>${this.state.estTotal}</p>
          </div>
        </div>
        <p onClick={this.handleClickItemDetail}>
          {this.state.showItemDetails
            ? `Hide item details -`
            : 'Show item details +'}
        </p>
        {this.state.showItemDetails && <ItemDetails items={this.props.items}/>}
        <hr />
        <p onClick={this.handleClickShowPromoCode}>
          {this.state.showPromoCode
            ? 'Hide promo code -'
            : 'Apply promo code +'}
        </p>
        {this.state.showPromoCode && (
          <PromoCode
            changePromoCode={this.changePromoCode}
            addPromoCode={this.addPromoCode}
          />
        )}
      </div>
    );
  }
}

function mapStateToProps(state) {
  return { items: state.items, discount: state.discount };
}

// Replace null with actions you want to dispatch in {}
export default connect(
  mapStateToProps,
  {changePromoCode, addPromoCode}
)(PriceSideBar);
