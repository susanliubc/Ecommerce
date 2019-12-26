import {
  USER_LOADED,
  REGISTER_SUCCESS,
  REGISTER_FAIL,
  LOGIN_SUCCESS,
  LOGIN_FAIL,
  LOGOUT,
  AUTH_ERROR,
  CLEAR_ERROR
} from '../actions/type';

const initState = {
  user: null,
  isAuthenticated: false,
  // token: localStorage.getItem('token'),
  loading: true,
  errors: null
};

export default (state = initState, action) => {
  switch (action.type) {
    case USER_LOADED:
      return {
        ...state,
        isAuthenticated: true,
        loading: false,
        user: action.payload
      };
    case REGISTER_SUCCESS:
    case LOGIN_SUCCESS:
      // localStorage.setItem('token', action.payload.token);
      return {
        ...state,
        ...action.payload,
        isAuthenticated: true,
        loading: false
      };
    case REGISTER_FAIL:
    case LOGIN_FAIL:
    case AUTH_ERROR:
    case LOGOUT:
      // localStorage.removeItem('token');
      return {
        ...state,
        user: {},
        // token: null,
        isAuthenticated: false,
        loading: false,
        errors: action.payload
      };
    case CLEAR_ERROR:
      return {
        ...state,
        errors: null
      };
    default:
      return state;
  }
};
