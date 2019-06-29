import React from 'react';
import { shallow } from 'enzyme';
import { GetRedflags, mapDispatchToProps } from '.';

const mockedFunction = jest.fn();
const props = {
  redflagsList: [],
  getRedflags: mockedFunction,
};
describe('tests for the GetRedflags component', () => {
  const component = shallow(<GetRedflags {...props} />);
  it('GetRedflags renders properly', () => {
    expect(component).toMatchSnapshot();
  });

  it('loads items on mount', () => {
    const instance = component.instance();
    instance.componentDidMount();
    mapDispatchToProps(mockedFunction).getRedflags();
    expect(mockedFunction).toHaveBeenCalled();
  });
});
