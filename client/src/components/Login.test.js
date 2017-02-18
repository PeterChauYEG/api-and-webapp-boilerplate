import React from 'react'

// import test dependencies 
import renderer from 'react-test-renderer'

// import component
import Login from './Login'

// render test
test('renders without crashing', () => {
  
  // declare prop
  const actions = {
  }
  const location = {
    state: null,
  }
  const user = {
    token: null,
  }
  
  // render component
  const component = renderer.create(
    <Login
      actions={actions} 
      location={location}
      user={user}
      />
  )

  // render DOM tree
  const tree = component.toJSON()
  
  // assertion
  expect(tree).toMatchSnapshot()
  
});
