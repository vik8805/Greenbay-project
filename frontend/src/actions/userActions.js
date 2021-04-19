import {
  STORE_USER_DATA,
  UPDATE_CURRENCYACCOUNT_OF_USER,
  RESET_STORE,
} from '../constants/actionTypes';

export function storeUserDataAction(payload) {
  return {
    type: STORE_USER_DATA,
    payload,
  };
}

export function updateCurrencyAccountOfUserAction(payload) {
  return {
    type: UPDATE_CURRENCYACCOUNT_OF_USER,
    payload,
  };
}

export function removeTokenAction(payload) {
  return {
    type: RESET_STORE,
    payload,
  };
}