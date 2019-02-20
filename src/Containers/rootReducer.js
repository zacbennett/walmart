import {
  ADD_PROMO_CODE,
  ADD_PROMO_CODE_SUCCESS,
  ADD_PROMO_CODE_INVALID
} from './actionTypes';

function rootReducer(
  state = {
    items: [
      {
        sku: 1234,
        title:
          'Essentials by OFM ESS-3085 Racing Style Leather Gaming Chair, Red',
        price: 99.11,
        priceSlash: 102.96,
        qty: 1
      }
    ],
    discount: null,
    loading: false,
    error: null,
  },
  action
) {
  console.log('reducer ran; state & action:', state, action);

  switch (action.type) {
    case ADD_PROMO_CODE_SUCCESS:
      return {...state, loading: false, discount: action.discount}
    case ADD_PROMO_CODE_INVALID:
      return {...state, loading: false, error: 'Promo Code Invalid'}
    case ADD_PROMO_CODE:
      return {...state,loading: true };
    default:
      return state;
  }
}

export default rootReducer;
