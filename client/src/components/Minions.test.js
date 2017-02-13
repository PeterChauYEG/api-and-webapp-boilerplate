import React from 'react';

// import test dependencies 
import { shallow } from 'enzyme';

// import component
import Minions from './Minions'

it('renders without crashing', () => {
  const actions = {}
  const minions = {}
  
  shallow(
    <Minions
      actions={actions}
      minions={minions}
      />
  );
});