// third-party libraries
import axios from 'axios';

// action types
import {
  CREATE_REDFLAG_SUCCESS,
  GET_REDFLAGS_SUCCESS,
  CREATE_REDFLAG_FAILED,
  GET_REDFLAGS_FAILED,
} from '../actionTypes/incidentTypes';
import { IS_LOADING } from '../actionTypes';

// utilities
import isAuthenticated from '../../../utilities';
import { baseUrl } from '../../../utilities/myConstants';

const startLoading = () => ({
  type: IS_LOADING,
});

const createRedflagSuccess = respo => ({
  type: CREATE_REDFLAG_SUCCESS,
  payload: respo.data.message,
});

const createRedflagFailed = error => ({
  type: CREATE_REDFLAG_FAILED,
  payload: error.response.data.error,
});

const getRedflagSuccess = (respo, userNameInToken) => ({
  type: GET_REDFLAGS_SUCCESS,
  payload: respo.data.data,
  username: userNameInToken,
});

const getRedflagFailed = () => ({
  type: GET_REDFLAGS_FAILED,
});

const { token } = isAuthenticated();
export const createRedflagAction = redflagObject => (dispatch) => {
  dispatch(startLoading());
  return axios({
    url: `${baseUrl}/red-flags`,
    method: 'post',
    data: redflagObject,
    headers: {
      content_type: 'application/json',
      Authorization: `Bearer ${token}`,
    },
  }).then((resp) => {
    dispatch(createRedflagSuccess(resp));
  }).catch((error) => {
    dispatch(createRedflagFailed(error));
  });
};

export const getRedflagsAction = () => (dispatch) => {
  dispatch(startLoading());
  return axios({
    url: `${baseUrl}/red-flags`,
    method: 'get',
    headers: {
      content_type: 'application/json',
      Authorization: `Bearer ${token}`,
    },
  }).then((resp) => {
    const { username } = isAuthenticated();
    dispatch(getRedflagSuccess(resp, username));
  }).catch(() => {
    dispatch(getRedflagFailed());
  });
};
