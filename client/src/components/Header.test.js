import React from 'react'

// import test dependencies 
import renderer from 'react-test-renderer'

// import component
import Header from './Header'

// render test
test('renders without crashing', () => {
  
  // declare prop
  const backgroundColor = ""
  const children = <p>{process.env.NODE_ENV}</p>
  
  // render component
  const component = renderer.create(
    <Header backgroundColor={backgroundColor}>
      {children}
    </Header>
  )

  // render DOM tree
  const tree = component.toJSON()
  
  // assertion
  expect(tree).toMatchSnapshot()
  
});
