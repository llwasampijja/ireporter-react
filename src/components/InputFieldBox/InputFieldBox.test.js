// react libraries
import React from 'react';

// third-party libraries
import { shallow } from 'enzyme';

// component
import InputFieldBox from '.';

describe('tests the inputfieldbox component', () => {
  const wrapper = shallow(<InputFieldBox />);
  it('should match snapshop', () => {
    expect(wrapper).toMatchSnapshot();
  });
});
