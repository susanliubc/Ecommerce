import {
  REGISTER_SUCCESS,
  REGISTER_FAIL,
  LOGIN_SUCCESS,
  LOGIN_FAIL,
  LOGOUT,
  USER_LOADED,
  AUTH_ERROR,
  CLEAR_ERROR
} from './type';
import axios from 'axios';

//Load user
export const loadUser = () => async (dispatch, getState) => {
  try {
    const res = await axios.get('/api/auth', tokenConfig(getState));

    dispatch({
      type: USER_LOADED,
      payload: res.data
    });
  } catch (error) {
    dispatch({
      type: AUTH_ERROR,
      payload: error.response.data.msg
    });
  }
};

//Register user
export const registerUser = formData => async dispatch => {
  const config = {
    headers: {
      'Content-Type': 'application/json'
    }
  };

  try {
    const res = await axios.post('/api/users', formData, config);

    dispatch({
      type: REGISTER_SUCCESS,
      payload: res.data
    });
    dispatch(loadUser());
  } catch (error) {
    dispatch({
      type: REGISTER_FAIL,
      payload: error.response.data.msg
    });
  }
};

//Login user
export const loginUser = formData => async dispatch => {
  const config = {
    headers: {
      'Content-Type': 'application/json'
    }
  };

  console.log('formData', formData);

  try {
    const res = await axios.post('/api/auth', formData, config);

    dispatch({
      type: LOGIN_SUCCESS,
      payload: res.data
    });
    dispatch(loadUser());
  } catch (error) {
    dispatch({
      type: LOGIN_FAIL,
      payload: error.response.data.msg
    });
  }
};

export const logout = () => ({
  type: LOGOUT
});

export const clearError = () => ({
  type: CLEAR_ERROR
});

//Setup config/headers and token
export const tokenConfig = getState => {
  //Get token from localStorage
  const token = getState().auth.token;

  //If token exists, add to header
  if (token) {
    axios.defaults.headers.common['x-auth-token'] = token;
  } else {
    delete axios.defaults.headers.common['x-auth-token'];
  }
};
