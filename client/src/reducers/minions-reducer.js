// import action types
import * as types from '../actions/action-types';

export default (state = {}, action) => {
  const {
    minion,
    minions,
    type,
  } = action

  switch (type) {
    case types.ADD_MINION:
      return {
        ...state,
        minions: [
          ...state.minions,
          minion,
        ]
      }
    case types.SET_MINIONS:
      return {
        ...state,
        minions
      }
    case types.TOGGLE_MINION_FORM:
      return {
        ...state,
        formIsOpen: !state.formIsOpen,
      }
    default:
      return state;
  }
};