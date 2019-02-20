import { put, takeLatest, select } from 'redux-saga/effects'
import { getPromoCode } from './selectors'

import { ADD_PROMO_CODE, ADD_PROMO_CODE_SUCCESS, ADD_PROMO_CODE_INVALID } from './actionTypes';


// Our worker Saga: will perform the async increment task
export function* checkPromoCode() {
  console.log('in check promo code')

  const promoCode = yield select(getPromoCode)
  console.log('promo code is', promoCode)

    // Here is where we would expect to make an API call to check that the code is valid
  if(promoCode === "DISCOUNT"){
    console.log('made it to calling action!')
    yield put({ type: ADD_PROMO_CODE_SUCCESS, discount: .1 })
  }else{
    yield put({ type: ADD_PROMO_CODE_INVALID })
  }
  
}

// Our watcher Saga: spawn a new incrementAsync task on each INCREMENT_ASYNC
export default function* rootSaga() {
  console.log('in root saga')
  yield takeLatest(ADD_PROMO_CODE, checkPromoCode)
}