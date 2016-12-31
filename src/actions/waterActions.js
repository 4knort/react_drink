import * as types from 'constants/actionTypes';

export function addWater(volume) {
  return {
    type: types.ADD_WATER,
    payload: volume,
  }
}

export function inputChange(volume) {
  return {
    type: types.INPUT_CHANGE,
    payload: volume,
  }
}

export function reset() {
  return {
    type: types.RESET,
    payload: 0,
  }
}