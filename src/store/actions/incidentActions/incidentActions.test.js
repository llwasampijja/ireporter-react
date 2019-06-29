// third-party libraries
import moxios from 'moxios';
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';

// action types
import {
  CREATE_REDFLAG_SUCCESS,
  GET_REDFLAGS_SUCCESS,
  CREATE_REDFLAG_FAILED,
  GET_REDFLAGS_FAILED,
} from '../actionTypes/incidentTypes';

import { IS_LOADING } from '../actionTypes';

import { createRedflagAction, getRedflagsAction } from '.';

const middleWares = [thunk];
const mockStore = configureMockStore(middleWares);

const mockeddata = {
  title: 'title',
  comment: 'description',
  images: 'image.jpg',
  videos: 'video.vob',
  location: '9, 23',
};

describe('test ui connection to the backend', () => {
  beforeEach(() => {
    moxios.install();
  });
  afterEach(() => {
    moxios.uninstall();
  });

  it('should successfully add redflag', () => {
    const store = mockStore({});
    moxios.wait(() => {
      const request = moxios.requests.mostRecent();
      request.respondWith({
        status: 201,
        response: mockeddata,
      });
    });

    const expectedActions = [
      {
        type: IS_LOADING,
      },
      {
        type: CREATE_REDFLAG_SUCCESS,
      },
    ];

    return store.dispatch(createRedflagAction(mockeddata))
      .then(() => {
        expect(store.getActions()).toEqual(expectedActions);
      });
  });

  it('should dispatch error state on failure to add redflag', () => {
    const store = mockStore({});
    moxios.wait(() => {
      const request = moxios.requests.mostRecent();
      request.respondWith({
        status: 400,
        response: mockeddata,
      });
    });

    const expectedActions = [
      {
        type: IS_LOADING,
      },
      {
        type: CREATE_REDFLAG_FAILED,
      },
    ];

    return store.dispatch(createRedflagAction(mockeddata))
      .then(() => {
        expect(store.getActions()).toEqual(expectedActions);
      });
  });

  it('should successful get redflags list', () => {
    const store = mockStore({});
    moxios.wait(() => {
      const request = moxios.requests.mostRecent();
      request.respondWith({
        status: 200,
        response: mockeddata,
      });
    });

    const expectedActions = [
      {
        type: IS_LOADING,
      },
      {
        type: GET_REDFLAGS_SUCCESS,
        username: '',
      },
    ];

    return store.dispatch(getRedflagsAction())
      .then(() => {
        expect(store.getActions()).toEqual(expectedActions);
      });
  });

  it('should dispatch error state on failing to get redflags list', () => {
    const store = mockStore({});
    moxios.wait(() => {
      const request = moxios.requests.mostRecent();
      request.respondWith({
        status: 400,
      });
    });

    const expectedActions = [
      {
        type: IS_LOADING,
      },
      {
        type: GET_REDFLAGS_FAILED,
      },
    ];

    return store.dispatch(getRedflagsAction())
      .then(() => {
        expect(store.getActions()).toEqual(expectedActions);
      });
  });
});
