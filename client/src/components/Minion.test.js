import React from 'react';

// import test dependencies 
import { shallow } from 'enzyme';

// import component
import Minion from './Minion'

it('renders without crashing', () => {
  const minion = {
    brand: "",
    description: "",
    name: "",
  }
  
  shallow(
    <Minion 
      minion={minion}
      />
  );
});