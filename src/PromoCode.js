import React, { Component } from 'react';

// import './PromoCode.css';

class PromoCode extends Component {
  constructor(){
    super()
    this.state = {promoCode: ''}
    this.handleClickPromoCode = this.handleClickPromoCode.bind(this)
    this.handleChange = this.handleChange.bind(this)
  }
  handleClickPromoCode(evt){
    evt.preventDefault()
    this.props.applyPromoCode(this.state.promoCode)
  }

  handleChange(evt){
    this.setState({[evt.target.name]: evt.target.value})
  }
  render() {
    return (
      <div className="PromoCode">
        <form>
          <label htmlFor="">Promo Code</label>
          <input type="text" name="promoCode" onChange={this.handleChange}/>
          <button onClick={this.handleClickPromoCode}>Apply</button>
        </form>
      </div>
    );
  }
}

export default PromoCode;
