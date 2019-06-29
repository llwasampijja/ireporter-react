// react libraries
import React from 'react';

// third-[arty libraries
import { shallow } from 'enzyme';

// components
import Navbar from '.';

describe('tests for the Navbar component', () => {
  it('Navbar renders properly', () => {
    const component = shallow(<Navbar />);
    expect(component).toMatchSnapshot();
  });
});
