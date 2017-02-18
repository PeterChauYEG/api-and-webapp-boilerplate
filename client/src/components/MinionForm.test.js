import React from 'react'

// import test dependencies 
import renderer from 'react-test-renderer'

// import component
import MinionForm from './MinionForm'

// render test
test('renders without crashing', () => {
  
  // declare prop
  const actions = {
    getMinionsRequest: () => {},
    toggleMinionForm: () => {},
  }
  const minions = {
    minions: [
      
    ],
  }
  const user = {
    token: null,
  }
  
  // render component
  const component = renderer.create(
    <MinionForm
      actions={actions} 
      // minions={minions}
      user={user}
      />
  )

  // render DOM tree
  const tree = component.toJSON()
  
  // assertion
  expect(tree).toMatchSnapshot()
  
});
