// react libraries
import React from 'react';

// third-party libraries
import { shallow } from 'enzyme';

// components
import TextFieldBox from '.';

describe('tests the TextFieldBox component', () => {
  const wrapper = shallow(<TextFieldBox />);
  it('should match snapshop', () => {
    expect(wrapper).toMatchSnapshot();
  });
});
