// import action types
import * as types from '../actions';

// import reducer
import minionsReducer from './minions-reducer'

// default state test
test('has a default state', () => {
  const expected = {}
  
  // assert
  expect(
    minionsReducer(
      undefined, { type: 'unexpected' }
    )
  ).toEqual(
    expected
  )
  
})

// ADD_MINION action test
test('can handle ADD_MINION', () => {
  const initialState = {
    minions: []
  }
  
  const minion = {
    name: 'test name',
  }
  
  const expected = {
    ...initialState,
    minions: [
      ...initialState.minions,
      minion,
    ]
  }
  
  // assert
  expect(
    minionsReducer(
      initialState, 
      types.addMinion(minion)
    )
  ).toEqual(expected)
  
})

// SET_MINIONS action test
test('can handle SET_MINIONS', () => {
  const initialState = {}
  
  const minions = [
    {
      name: 'test name',
    },
    {
      name: 'test name',
    },
    {
      name: 'test name',
    },    
  ]
  
  const expected = {
    ...initialState,
    minions,
  }
  
  // assert
  expect(
    minionsReducer(
      undefined, 
      types.setMinions(minions)
    )
  ).toEqual(expected)
  
})

// TOGGLE_MINION_FORM action test
test('can handle TOGGLE_MINION_FORM', () => {
  const initialState = {
    formIsOpen: false,
  }
  
  const expected = {
    ...initialState,
    formIsOpen: !initialState.formIsOpen,
  }
  
  // assert
  expect(
    minionsReducer(
      undefined, 
      types.toggleMinionForm()
    )
  ).toEqual(expected)
  
})