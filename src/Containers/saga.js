import { put, takeLatest, select } from 'redux-saga/effects'
import { getPromoCode } from './selectors'

import { ADD_PROMO_CODE, ADD_PROMO_CODE_SUCCESS, ADD_PROMO_CODE_INVALID } from './actionTypes';


// Our worker Saga: will perform the async increment task
export function* checkPromoCode() {
  //get promo code form state
  const promoCode = yield select(getPromoCode)

    // Here is where we would expect to make an API call to check that the code is valid
  if(promoCode === "DISCOUNT"){
    yield put({ type: ADD_PROMO_CODE_SUCCESS, discount: .1 })
  }else{
    yield put({ type: ADD_PROMO_CODE_INVALID })
  }
  
}

//Watching for action of add_promo_code
export default function* rootSaga() {
  yield takeLatest(ADD_PROMO_CODE, checkPromoCode)
}