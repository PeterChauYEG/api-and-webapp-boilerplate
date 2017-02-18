import React from 'react'

// import test dependencies 
import renderer from 'react-test-renderer'

// import component
import Minion from './Minion'

// render test
test('renders without crashing', () => {
  
  // declare prop
  const minion = {
    brand: "brand",
    description: "description",
    name: "name",
  }
  
  // render component
  const component = renderer.create(
    <Minion 
      minion={minion}
      />
  )
  
  // render DOM tree
  const tree = component.toJSON()
  
  // assertion
  expect(tree).toMatchSnapshot()
  
});