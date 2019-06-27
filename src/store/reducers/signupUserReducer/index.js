import { IS_SIGNING_UP, SIGN_UP_SUCCESS, SIGN_UP_FAILED } from '../../actions/actionTypes/signupUserTypes';

const initState = {
  isLoading: false,
};

const signupUserReducer = (state = initState, action) => {
  switch (action.type) {
    case IS_SIGNING_UP:
      return {
        ...state,
        isLoading: true,
      };
    case SIGN_UP_SUCCESS:
      return {
        ...state,
        isLoading: false,
      };
    case SIGN_UP_FAILED:
      return {
        ...state,
        isLoading: false,
      };
    default: {
      return state;
    }
  }
};

export default signupUserReducer;
