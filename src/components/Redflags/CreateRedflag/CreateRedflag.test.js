// react libraries
import React from 'react';

// third-party libraries
import { shallow } from 'enzyme';

// components
import { CreateRedflag, mapDispatchToProps } from '.';

describe('tests for the CreateRedflag component', () => {
  const mockedFunction = jest.fn();
  const theseProps = {
    title: 'title',
    description: 'description',
    imageUrls: 'image.jpg',
    videoUrls: 'video.vob',
    coordinates: '9, 23',
  };

  const component = shallow(
    <CreateRedflag
      title="title"
      description="description"
      imageUrls="image.jpg"
      videoUrls="video.vob"
      coordinates="9, 23"
    />,
  );

  it('CreateRedflag renders properly', () => {
    expect(component).toMatchSnapshot();
  });

  it('calls CreateRedflag function', () => {
    component.setProps({
      postRedflags: mockedFunction,
    });
    mapDispatchToProps(mockedFunction).postRedflags(theseProps);
    expect(mockedFunction).toHaveBeenCalled();
  });

  it('should update state on typing', () => {
    component.setProps({
      postRedflags: mockedFunction,
    });
    const event = {
      target: {
        type: 'submit',
        name: 'signup',
      },
    };
    const instance = component.instance();
    instance.onChangeHandler(event);
  });

  it('submits redflad data on clicking the button', () => {
    component.setProps({
      postRedflags: mockedFunction,
    });
    const instance = component.instance();
    instance.onSubmitHandler();
    expect(instance).toMatchSnapshot();
  });
});
