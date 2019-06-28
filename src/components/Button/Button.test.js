import React from 'react';
import { shallow } from 'enzyme';
import Button from '.';

describe('tests for the button component', () => {
  it('button renders properly', () => {
    const component = <Button />;
    expect(component).toMatchSnapshot();
  });
});
