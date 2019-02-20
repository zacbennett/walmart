import React, { Component } from 'react';
import PromoCode from '../Components/PromoCode';
import ItemDetails from '../Components/ItemDetails';
import './PriceSideBar.css';
import { changePromoCode, addPromoCode } from './actionCreators';
import { connect } from 'react-redux';

class PriceSideBar extends Component {
  constructor() {
    super();
    this.state = {
      showItemDetails: false,
      showPromoCode: false,
      showPickupBox: false
    };

    this.handleClickItemDetail = this.handleClickItemDetail.bind(this);
    this.handleClickShowPromoCode = this.handleClickShowPromoCode.bind(this);
    this.addPromoCode = this.addPromoCode.bind(this);
    this.changePromoCode = this.changePromoCode.bind(this);
    this.handleShowPickupBox = this.handleShowPickupBox.bind(this);
  }
  componentDidMount() {
    let subtotal = this.props.items.reduce(function(acc, curr) {
      return acc + curr.price;
    }, 0);
    let taxes = Number((subtotal * 0.1).toFixed(2));

    let estTotal = subtotal + taxes;

    this.setState({ subtotal, taxes, estTotal });
  }
  // When the state in the store changes, we need to check if we need to update the discount
  componentDidUpdate(prevProps) {
    if (prevProps.discount !== this.props.discount) {
      let estTotal = this.state.estTotal * (1 - this.props.discount);
      this.setState({ estTotal });
    }
  }

  handleClickShowPromoCode() {
    this.setState(state => ({ showPromoCode: !state.showPromoCode }));
  }
  handleClickItemDetail() {
    this.setState(state => ({ showItemDetails: !state.showItemDetails }));
  }
  handleShowPickupBox() {
    this.setState(state => ({ showPickupBox: !state.showPickupBox }));
  }

  addPromoCode() {
    this.props.addPromoCode();
  }
  changePromoCode(code) {
    this.props.changePromoCode(code);
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
            <p>
              <u onClick={this.handleShowPickupBox}>Pickup savings</u>
            </p>
            <p id="pickup-savings">$3.92</p>
            <div
              id="pickup-box"
              className={this.state.showPickupBox ? 'appear' : 'hidden'}
            >
              Picking up your order in the store helps cut costs, and we pass
              the savings on to you.
            </div>
          </div>
          <div>
            <p>Est taxes & fees
              <br/>
              (Based on 94085)
            </p>
            <p>${this.state.taxes}</p>
          </div>
          <hr />
          <div id="est-total">
            <p>Est Total</p>
            <p>${this.state.estTotal}</p>
          </div>
        </div>
        <p onClick={this.handleClickItemDetail}>
          <u>
            {this.state.showItemDetails
              ? `Hide item details -`
              : 'Show item details +'}
          </u>
        </p>
        {this.state.showItemDetails && <ItemDetails items={this.props.items} />}
        <hr />
        <p onClick={this.handleClickShowPromoCode}>
          <u>
            {this.state.showPromoCode
              ? 'Hide promo code -'
              : 'Apply promo code +'}
          </u>
        </p>
        {this.state.showPromoCode && (
          <PromoCode
            changePromoCode={this.changePromoCode}
            addPromoCode={this.addPromoCode}
            error={this.props.error}
          />
        )}
      </div>
    );
  }
}

function mapStateToProps(state) {
  return { items: state.items, discount: state.discount, error: state.error };
}

export default connect(
  mapStateToProps,
  { changePromoCode, addPromoCode }
)(PriceSideBar);
