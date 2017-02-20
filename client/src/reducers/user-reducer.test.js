// import action types
import * as types from '../actions'

// import reducer
import userReducer from './user-reducer'

// default state test
test('has a default state', () => {
  const expected = {}
  
  // assert
  expect(
    userReducer(
      undefined, { type: 'unexpected' }
    )
  ).toEqual(
    expected
  )
  
})

// SET_TOKEN action test
test('can handle SET_TOKEN', () => {
  const initialState = {}
  
  const token = 'token'
  
  const expected = {
    ...initialState,
    token,
  }
  
  // assert
  expect(
    userReducer(
      initialState, 
      types.setToken(token)
    )
  ).toEqual(expected)
  
})