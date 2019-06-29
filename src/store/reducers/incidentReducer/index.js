
// action types
import {
  CREATE_REDFLAG_SUCCESS,
  GET_REDFLAGS_SUCCESS,
  CREATE_REDFLAG_FAILED,
} from '../../actions/actionTypes/incidentTypes';
import { IS_LOADING } from '../../actions/actionTypes';

const initState = {
  redflagsList: [],
  successMessage: '',
  error: '',
  myUserName: '',
};

const incidentReducer = (state = initState, action) => {
  switch (action.type) {
    case IS_LOADING:
      return {
        ...state,
        isLoading: true,
      };
    case CREATE_REDFLAG_SUCCESS:
      return {
        ...state,
        isLoading: false,
        successMessage: action.payload,
      };
    case CREATE_REDFLAG_FAILED:
      return {
        ...state,
        isLoading: false,
        error: action.payload,
      };
    case GET_REDFLAGS_SUCCESS:
      return {
        ...state,
        isLoading: false,
        redflagsList: action.payload,
        myUserName: action.username,
      };
    default:
      return {
        state,
      };
  }
};

export default incidentReducer;
