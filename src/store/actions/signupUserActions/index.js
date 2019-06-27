import axios from 'axios';
import { IS_SIGNING_UP, SIGN_UP_SUCCESS, SIGN_UP_FAILED } from '../actionTypes/signupUserTypes';
import { baseUrl } from '../../../utilities/myConstants';

const startSigningUp = () => ({
  type: IS_SIGNING_UP,
});

const signUpUserSuccess = () => ({
  type: SIGN_UP_SUCCESS,
});

const signUpUserFailed = () => ({
  type: SIGN_UP_FAILED,
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
    dispatch(signUpUserSuccess());
    console.log(resp);
  }).catch((error) => {
    dispatch(signUpUserFailed());
    console.log(error.response);
  });
};

export default signupUserActions;
