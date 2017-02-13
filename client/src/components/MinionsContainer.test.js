import React from 'react';

// import test dependencies 
import { shallow } from 'enzyme';

// import component
import Minions from './MinionsContainer'

it('renders without crashing', () => {
  const minions = []
  
  shallow(
    <MinionsContainer
      minions={minions}
      />
  );
});