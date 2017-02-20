import React from 'react'

// import test dependencies 
import renderer from 'react-test-renderer'

// import component
import MinionsContainer from './MinionsContainer'

// render test
test('renders without crashing', () => {
  
  // declare prop
  const minions = []
  
  // render component
  const component = renderer.create(
    <MinionsContainer 
      minions={minions}
      />
  )

  // render DOM tree
  const tree = component.toJSON()
  
  // assertion
  expect(tree).toMatchSnapshot()
  
});

// render minions
test('renders minions', () => {
  
  // declare prop
  const minions = [
    {
      null
    },
    {
      null
    },
    {
      null
    },    
  ]
  
  // render component
  const component = renderer.create(
    <MinionsContainer 
      minions={minions}
      />
  )

  // render DOM tree
  const tree = component.toJSON()
  
  // assertion
  expect(tree).toMatchSnapshot()
  
});