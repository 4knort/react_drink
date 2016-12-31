import * as types from 'constants/actionTypes';

const initialState = {
  volume: 0,
  inputNumber: 0,
}

export default function water(state = initialState, action) {
  switch (action.type) {
    case types.ADD_WATER: {
      return {
        ...state,
        volume: state.volume += action.payload,
      }
    }
    case types.INPUT_CHANGE: {
      return {
        ...state,
        inputNumber: action.payload,
      }
    }
    case types.RESET: {
      return {
        ...state,
        volume: action.payload,
        inputNumber: action.payload,
      }
    }
    default: {
      return state;
    }
  }
}