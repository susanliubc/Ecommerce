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

export const registerUser = user => ({
  type: REGISTER_SUCCESS,
  payload: user
});

export const registerFail = () => ({
  type: REGISTER_FAIL
});

export const loginUser = user => ({
  type: LOGIN_SUCCESS,
  payload: user
});

export const loginFail = () => ({
  type: LOGIN_FAIL
});

export const logout = () => ({
  type: LOGOUT
});

export const userLoded = user => ({
  type: USER_LOADED,
  payload: user
});

export const authError = () => ({
  type: AUTH_ERROR
});

export const clearError = () => ({
  type: CLEAR_ERROR
});
