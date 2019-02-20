import {
  ADD_PROMO_CODE,
  ADD_PROMO_CODE_SUCCESS,
  ADD_PROMO_CODE_INVALID,
  CHANGE_PROMO_CODE
} from './actionTypes';

function rootReducer(
  state = {
    items: [
      {
        sku: 1234,
        image: 'https://i5.walmartimages.com/asr/e73e1252-642c-4473-93ea-fd3b564a7027_1.3e81ea58fa3042452fe185129a4a865f.jpeg',
        title:
          'Essentials by OFM ESS-3085 Racing Style Leather Gaming Chair, Red',
        price: 99.11,
        priceSlash: 102.96,
        qty: 1,
      }
    ],
    promoCode: null,
    discount: null,
    loading: false,
    error: null,
  },
  action
) {

  switch (action.type) {
    case ADD_PROMO_CODE_SUCCESS:
      return {...state, loading: false, discount: action.discount, error: ''}
    case CHANGE_PROMO_CODE:
      return {...state, promoCode: action.code}
    case ADD_PROMO_CODE_INVALID:
      return {...state, loading: false, error: 'Promo Code Invalid'}
    case ADD_PROMO_CODE:
      return {...state,loading: true };
    default:
      return state;
  }
}

export default rootReducer;
