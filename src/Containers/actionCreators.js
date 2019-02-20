import { ADD_PROMO_CODE, ADD_PROMO_CODE_SUCCESS, ADD_PROMO_CODE_INVALID } from './actionTypes';

export function addPromoCode(code) {
  return { type: ADD_PROMO_CODE, code };
}

export function addPromoCodeSuccess(discount) {
  return { type: ADD_PROMO_CODE_SUCCESS, discount };
}
export function addPromoCodeInvalid() {
  return { type: ADD_PROMO_CODE_INVALID };
}
