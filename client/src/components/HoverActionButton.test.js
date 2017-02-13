import React from 'react';

// import test dependencies 
import { shallow } from 'enzyme';

// import component
import HoverActionButton from './HoverActionButton'

it('renders without crashing', () => {
  const action = () => {}
  const backgroundColor = ""
  const text = ""
  
  shallow(
    <HoverActionButton 
      action={action} 
      backgroundColor={backgroundColor} 
      text={text}
      />
  );
});