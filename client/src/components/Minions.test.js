import React from 'react'

// import test dependencies 
import renderer from 'react-test-renderer'

// import component
import Minions from './Minions'

// render test
test('renders without crashing', () => {
  
  // declare prop
  const actions = {
    toggleMinionForm: () => {},
  }
  const minions = {
    minions: [
    ],
  }
  const user = {
    
  }
  
  // render component
  const component = renderer.create(
    <Minions
      actions={actions}
      minions={minions}
      user={user}
      />
  )

  // render DOM tree
  const tree = component.toJSON()
  
  // assertion
  expect(tree).toMatchSnapshot()
  
});

// renderForm test
test('renderForm renders without crashing', () => {
  
  // declare prop
  const actions = {
    toggleMinionForm: () => {},
  }
  const minions = {
    formIsOpen: "something",
    minions: [
    ]
  }
  const user = {
    
  }
  
  // render component
  const component = renderer.create(
    <Minions
      actions={actions}
      minions={minions}
      user={user}
      />
  )

  // render DOM tree
  let tree = component.toJSON()
  
  // assertion
  expect(tree).toMatchSnapshot()
  
});