import React from 'react'

// import test dependencies 
import renderer from 'react-test-renderer'

// import component
import HoverButton from './HoverButton'

// render test
test('renders without crashing', () => {
  
  // declare prop
  const action = () => {}
  const backgroundColor = ""
  const icon = ""
  
  // render component
  const component = renderer.create(
    <HoverButton 
      action={action} 
      backgroundColor={backgroundColor} 
      icon={icon} 
      />
  )

  // render DOM tree
  const tree = component.toJSON()
  
  // assertion
  expect(tree).toMatchSnapshot()
  
});

// onClick test
test('onClick callback is called', () => {  
  
  // declare prop
  const action = () => {}
  const backgroundColor = ""
  const icon = ""
  
  // render component
  const component = renderer.create(
    <HoverButton 
      action={action} 
      backgroundColor={backgroundColor} 
      icon={icon} 
      />
  )

  // render DOM tree
  let tree = component.toJSON()
  
  // manually trigger the callback
  tree.props.onClick()
  
  // re-rendering
  tree = component.toJSON()
  
  // assertion
  expect(tree).toMatchSnapshot()
  
});