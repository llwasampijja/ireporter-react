// action types
import {
  SIGN_UP_SUCCESS,
  SIGN_UP_FAILED,
} from '../../actions/actionTypes/signupUserTypes';
import { IS_LOADING } from '../../actions/actionTypes';

const initState = {
  isLoading: false,
  signupErrorMessage: '',
  signupStateMessage: '',
  isLoggedIn: false,
};

const signupUserReducer = (state = initState, action) => {
  switch (action.type) {
    case IS_LOADING:
      return {
        ...state,
        isLoading: true,
      };
    case SIGN_UP_SUCCESS:
      return {
        ...state,
        isLoggedIn: true,
        isLoading: false,
        signupStateMessage: action.payload,
      };
    case SIGN_UP_FAILED:
      return {
        ...state,
        isLoading: false,
        signupErrorMessage: action.payload,
      };
    default: {
      return state;
    }
  }
};

export default signupUserReducer;
