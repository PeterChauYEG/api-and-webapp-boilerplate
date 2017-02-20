// import action functions and types
import * as actions from './index';
import * as types from './action-types';

// addMinion
test('addMinion returns as expected', () => {
  
  // declare params
  const minion = {}
  
  // declare expected result  
  const expected = {
    type: types.ADD_MINION,
    minion,
  }
  
  // assert
  expect(
    actions.addMinion(minion)
  ).toEqual(
    expected
  )
  
})

// addMinionRequest
test('addMinionRequest returns as expected', () => {
  
  // declare params
  const minion = {}
  const token = ""

  // declare expected result  
  const expected = {
    type: types.ADD_MINION_REQUEST,
    minion,
    token,
  }
  
  // assert
  expect(
    actions.addMinionRequest(minion, token)
  ).toEqual(
    expected
  )
  
})

// getMinionsRequest
test('getMinionsRequest returns as expected', () => {
  
  // declare params
  const token = ""

  // declare expected result  
  const expected = {
    type: types.GET_MINIONS_REQUEST,
    token,
  }
  
  // assert
  expect(
    actions.getMinionsRequest(token)
  ).toEqual(
    expected
  )
  
})

// setMinions
test('setMinions returns as expected', () => {
  
  // declare params
  const minions = {}
  
  // declare expected result  
  const expected = {
    type: types.SET_MINIONS,
    minions,
  }
  
  // assert
  expect(
    actions.setMinions(minions)
  ).toEqual(
    expected
  )
  
})

// toggleMinionForm
test('toggleMinionForm returns as expected', () => {

  // declare expected result
  const expected = {
    type: types.TOGGLE_MINION_FORM,
  }
  
  // assert
  expect(
    actions.toggleMinionForm()
  ).toEqual(
    expected
  )
  
})

// navigate
test('navigate returns as expected', () => {
  
  // declare params
  const location = ""

  // declare expected result  
  const expected = {
    type: types.NAVIGATE,
    location,
  }
  
  // assert
  expect(
    actions.navigate(location)
  ).toEqual(
    expected
  )
  
})

// authenticationRequest
test('authenticationRequest returns as expected', () => {
  
  // declare params
  const credentials = ""
  
  // declare expected result
  const expected = {
    type: types.AUTHENTICATION_REQUEST,
    credentials,
  }
  
  // assert
  expect(
    actions.authenticationRequest(credentials)
  ).toEqual(
    expected
  )
  
})

// setToken
test('setToken returns as expected', () => {
  
  // declare params
  const token = ""
  
  // declare expected result
  const expected = {
    type: types.SET_TOKEN,
    token,
  }
  
  // assert
  expect(
    actions.setToken(token)
  ).toEqual(
    expected
  )
  
})

