import React from 'react';

// import test dependencies 
import { shallow } from 'enzyme';

// import component
import Root from './Root'

it('renders without crashing', () => {
  shallow(
    <Root />
  );
});