import React from 'react'

// import test dependencies 
import renderer from 'react-test-renderer'

// import component
import HoverActionButton from './HoverActionButton'

// render test
test('renders without crashing', () => {
  
  // declare prop
  const action = () => {}
  const backgroundColor = ""
  const text = ""
  
  // render component
  const component = renderer.create(
    <HoverActionButton 
      action={action} 
      backgroundColor={backgroundColor} 
      text={text}
      />
  )

  // render DOM tree
  const tree = component.toJSON()
  
  // assertion
  expect(tree).toMatchSnapshot()
  
});