import {
  LOAD_ITEMS,
  SET_FILTER_TO_LOAD_ITEMS,
  LOAD_ITEMS_ERROR,
  UNLOAD_ITEMS_ERROR,
  LOAD_ACTUAL_ITEM,
  UNLOAD_ACTUAL_ITEM,
  RESET_STORE,
} from '../constants/actionTypes';

const initialState = {
  loadItemStatus: 'loading',
  errorMessage: '',
  isFiltered: true,
  items: [],
  actualItem: {},
};

function itemReducer(state = initialState, action) {
  if (action.type === LOAD_ITEMS) {
    return {
      ...state,
      loadItemStatus: 'ready',
      items: action.payload,
      errorMessage: '',
    };
  }
  if (action.type === SET_FILTER_TO_LOAD_ITEMS) {
    return {
      ...state,
      loadItemStatus: 'ready',
      isFiltered: action.payload,
      errorMessage: '',
    };
  }
  if (action.type === LOAD_ACTUAL_ITEM) {
    return {
      ...state,
      loadItemStatus: 'ready',
      actualItem: action.payload,
      errorMessage: '',
    };
  }
  if (action.type === UNLOAD_ACTUAL_ITEM) {
    return {
      ...state,
      loadItemStatus: 'ready',
      actualItem: initialState.actualItem,
      errorMessage: '',
    };
  }
  if (action.type === LOAD_ITEMS_ERROR) {
    return {
      ...state,
      loadItemStatus: 'error',
      errorMessage: action.payload,
    };
  }
  if (action.type === UNLOAD_ITEMS_ERROR) {
    return {
      ...state,
      loadItemStatus: 'ready',
      errorMessage: '',
    };
  }
  if (action.type === RESET_STORE) {
    return initialState;
  }
  return state;
}

export default itemReducer;