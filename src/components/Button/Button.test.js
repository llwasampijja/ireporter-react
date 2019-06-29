// react libraries
import React from 'react';

// third-party libraries
import { shallow } from 'enzyme';

// component
import Button from '.';

describe('tests for the button component', () => {
  it('button renders properly', () => {
    const component = shallow(<Button />);
    expect(component).toMatchSnapshot();
  });
});
