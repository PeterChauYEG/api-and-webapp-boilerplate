import React from 'react';

// import test dependencies 
import { shallow } from 'enzyme';

// import component
import App from './App'

it('renders without crashing', () => {

  shallow(
    <App />
  );
});