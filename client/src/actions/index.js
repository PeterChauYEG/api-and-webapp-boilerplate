import * as types from './action-types';

// minions actions
export const addMinion = (minion) => {
  return {
    type: types.ADD_MINION,
    minion,
  }
}

export const addMinionRequest = (minion, token) => {
  return {
    type: types.ADD_MINION_REQUEST,
    minion,
    token,
  }
}

export const getMinionsRequest = (token) => {
  return {
    type: types.GET_MINIONS_REQUEST,
    token,
  }
}

export const setMinions = (minions) => {
  return {
    type: types.SET_MINIONS,
    minions,
  }
}

export const toggleMinionForm = () => {
  return {
    type: types.TOGGLE_MINION_FORM,
  }
}

// router actions
export const navigate = (location) => {
  return {
    type: types.NAVIGATE,
    location,
  }
}

// user actions
export const authenticationRequest = (credentials) => {
  return {
    type: types.AUTHENTICATION_REQUEST,
    credentials,
  }
}

export const setToken = (token) => {
  return {
    type: types.SET_TOKEN,
    token,
  }
}
