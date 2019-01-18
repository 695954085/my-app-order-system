import { Dispatch } from 'redux';
import { requestLogin as login } from '../api';
import { LOGIN_FAILURE, LOGIN_REQUEST, LOGIN_SUCCESS } from '../constants/ActionTypes';

const loginRequest = () => ({
  type: LOGIN_REQUEST,
});

const loginSuccess = (data: any) => ({
  data,
  type: LOGIN_SUCCESS,
});

const loginFailure = (error: any) => ({
  error,
  type: LOGIN_FAILURE,
});

export const fetchLogin = (params: LoginParams) => async (dispatch: Dispatch) => {
  dispatch(loginRequest());
  return login(params)
    .then((response) => response.data)
    .then((data) => dispatch(loginSuccess(data))).catch((reason) => dispatch(loginFailure(JSON.stringify(reason))));
};
