import * as types from '../actions/action-types';

export default (state = {}, action) => {
  const {
    token,
    type,
  } = action

  switch (type) {
    case types.SET_TOKEN:
      return {
        ...state,
        token,
      }
    default:
      return state;
  }
};