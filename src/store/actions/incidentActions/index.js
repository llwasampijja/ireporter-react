import axios from 'axios';
import { CREATE_REDFLAG_SUCCESS, GET_REDFLAGS_SUCCESS } from '../actionTypes/incidentTypes';
import { IS_LOADING } from '../actionTypes';
import { baseUrl } from '../../../utilities/myConstants';

const startLoading = () => ({
  type: IS_LOADING,
});

const createRedflagSuccess = () => ({
  type: CREATE_REDFLAG_SUCCESS,
});

const getRedflagSuccess = () => ({
  type: GET_REDFLAGS_SUCCESS,
});

const token = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ1c2VyX2lkZW50aXR5Ijp7InVzZXJfaWQiOjU4LCJ1c2VybmFtZSI6ImRhbGwiLCJpc19hZG1pbiI6ZmFsc2V9LCJleHAiOjE1NjE2MzM2MDF9.TkfhpDW1MeK6dTIBx3w3jFPQfTBPaTsjs1oYX5gO1mc';

export const createRedflagAction = redflagObject => (dispatch) => {
  dispatch(startLoading());
  axios({
    url: `${baseUrl}/red-flags`,
    method: 'post',
    data: redflagObject,
    headers: {
      content_type: 'application/json',
    },
  }).then((resp) => {
    dispatch(createRedflagSuccess());
    console.log(resp.data);
  }).catch((error) => {
    console.log(error.response);
  });
};

export const getRedflagsAction = () => (dispatch) => {
  dispatch(startLoading());
  console.log('called');
  axios({
    url: `${baseUrl}/red-flags`,
    method: 'get',
    headers: {
      content_type: 'application/json',
      Authorization: `Bearer ${token}`,
    },
  }).then((resp) => {
    console.log(resp.data);
    dispatch(getRedflagSuccess());
  }).catch((error) => {
    console.log(error.response);
  });
};
