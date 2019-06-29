// react libraries
import React from 'react';

// third-party libraries
import { shallow } from 'enzyme';

// components
import LoaderProgress from '.';

describe('test for the LoaderProgress component', () => {
  const wrapper = shallow(<LoaderProgress />);
  it('should match the snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });
});
