import React from 'react'

// import test dependencies 
import renderer from 'react-test-renderer'

// import component
import App from './App'

// render test
test('renders without crashing', () => {

  // render component
  const component = renderer.create(
    <App />
  )

  // render DOM tree
  const tree = component.toJSON()
  
  // assertion
  expect(tree).toMatchSnapshot()
  
});
