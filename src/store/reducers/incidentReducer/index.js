import { CREATE_REDFLAG_SUCCESS, GET_REDFLAGS_SUCCESS } from '../../actions/actionTypes/incidentTypes';
import { IS_LOADING } from '../../actions/actionTypes';

const initState = {
  redflagsList: [],
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
      };
    case GET_REDFLAGS_SUCCESS:
      return {
        ...state,
        isLoading: false,
        redflagsList: action.payload,
      };
    default:
      return {
        state,
      };
  }
};

export default incidentReducer;
