import {
  STORE_USER_DATA,
  UPDATE_CURRENCYACCOUNT_OF_USER,
  RESET_STORE,
} from '../constants/actionTypes';

const initialState = {
  accessToken: '',
  id: null,
  userName: '',
  currencyAccount: null,
};

function userReducer(state = initialState, action) {
  if (action.type === STORE_USER_DATA) {
    return {
      ...state,
      accessToken: action.payload.accessToken,
      id: action.payload.id,
      userName: action.payload.userName,
      currencyAccount: action.payload.currencyAccount,
    };
  }
  if (action.type === UPDATE_CURRENCYACCOUNT_OF_USER) {
    return {
      ...state,
      currencyAccount: action.payload,
    };
  }
  if (action.type === RESET_STORE) {
    return initialState;
  }
  return state;
}

export default userReducer;