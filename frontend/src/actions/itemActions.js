import {
  LOAD_ITEMS,
  SET_FILTER_TO_LOAD_ITEMS,
  LOAD_ITEMS_ERROR,
  UNLOAD_ITEMS_ERROR,
  LOAD_ACTUAL_ITEM,
  UNLOAD_ACTUAL_ITEM,
} from '../constants/actionTypes';

export function loadItemsAction(payload) {
  return {
    type: LOAD_ITEMS,
    payload,
  };
}

export function setFilterToLoadItemsAction(payload) {
  return {
    type: SET_FILTER_TO_LOAD_ITEMS,
    payload,
  };
}

export function loadActualItemAction(payload) {
  return {
    type: LOAD_ACTUAL_ITEM,
    payload,
  };
}

export function unloadActualItemAction() {
  return {
    type: UNLOAD_ACTUAL_ITEM,
  };
}

export function errorOnLoadItemsAction(payload) {
  return {
    type: LOAD_ITEMS_ERROR,
    payload,
  };
}

export function unloadErrorItemsAction() {
  return {
    type: UNLOAD_ITEMS_ERROR,
  };
}
