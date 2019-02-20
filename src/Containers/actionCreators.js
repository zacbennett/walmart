import { ADD_PROMO_CODE, ADD_PROMO_CODE_SUCCESS, ADD_PROMO_CODE_INVALID, CHANGE_PROMO_CODE } from './actionTypes';

export function addPromoCode() {
  return { type: ADD_PROMO_CODE };
}

export function addPromoCodeSuccess(discount) {
  return { type: ADD_PROMO_CODE_SUCCESS, discount };
}
export function addPromoCodeInvalid() {
  return { type: ADD_PROMO_CODE_INVALID };
}
export function changePromoCode(code) {
  return { type: ADD_PROMO_CODE_INVALID, code };
}
