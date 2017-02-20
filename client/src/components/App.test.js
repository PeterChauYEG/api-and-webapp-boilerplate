import React from 'react'

// import test dependencies 
import renderer from 'react-test-renderer'

// import component
import App from './App'

// render test
test('renders without crashing', () => {
  
  // declare props
  let user = {
    token: null,
  }
  
  // render component
  const component = renderer.create(
    <App 
      user={user} />
  )

  // render DOM tree
  let tree = component.toJSON()
  
  // assertion
  expect(tree).toMatchSnapshot()

});
