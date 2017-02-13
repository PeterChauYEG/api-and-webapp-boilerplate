import React from 'react';

// import test dependencies 
import { shallow } from 'enzyme';

// import component
import Login from './Login'

it('renders without crashing', () => {
  const actions = {}
  
  shallow(
    <Login
      actions={actions} 
      />
  );
});