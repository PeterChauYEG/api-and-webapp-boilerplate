import React from 'react';

// import test dependencies 
import { shallow } from 'enzyme';

// import component
import HoverButton from './HoverButton'

it('renders without crashing', () => {
  const action = () => {}
  const backgroundColor = ""
  const icon = ""
  
  shallow(
    <HoverButton 
      action={action} 
      backgroundColor={backgroundColor} 
      icon={icon} 
      />
  );
});