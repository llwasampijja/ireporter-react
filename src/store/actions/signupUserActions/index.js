// third-party libraries
import axios from 'axios';

// action types
import { SIGN_UP_SUCCESS, SIGN_UP_FAILED } from '../actionTypes/signupUserTypes';
import { IS_LOADING } from '../actionTypes';
// utilities
import { baseUrl } from '../../../utilities/myConstants';

const startSigningUp = () => ({
  type: IS_LOADING,
});

const signUpUserSuccess = respo => ({
  type: SIGN_UP_SUCCESS,
  payload: respo.data.message,
  user: respo.data.data[0],
});

const signUpUserFailed = error => ({
  type: SIGN_UP_FAILED,
  payload: error.response.data.error,
});

const signupUserActions = userSignupData => (dispatch) => {
  dispatch(startSigningUp());
  axios({
    url: `${baseUrl}/auth/register`,
    method: 'post',
    headers: {
      'Content-Type': 'application/json',
    },
    data: userSignupData,

  }).then((resp) => {
    sessionStorage.setItem('access_token', resp.data.access_token);
    dispatch(signUpUserSuccess(resp));
    setTimeout(window.location.replace('/'), 50000);
  }).catch((error) => {
    dispatch(signUpUserFailed(error));
  });
};

export default signupUserActions;
