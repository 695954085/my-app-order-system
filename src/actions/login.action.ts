import { AnyAction, Dispatch } from 'redux';
import { requestLogin as login } from '../api';
import {
  LOGIN_FAILURE,
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
} from '../constants/ActionTypes';

const loginRequest = () => ({
  type: LOGIN_REQUEST,
});

const loginSuccess = (data: any) => ({
  ...data,
  type: LOGIN_SUCCESS,
});

const loginFailure = (error: string) => ({
  error,
  type: LOGIN_FAILURE,
});

export const fetchLogin = (params: LoginParams) => async (
  dispatch: Dispatch,
) => {
  dispatch(loginRequest());
  const postParams = { ...params };
  delete postParams.remember;
  return login(postParams)
    .then((response) => response.data)
    .then((responseData) => {
      // 成功登陆
      // 如果remember，那么把密码记录到localstorage
      // 如果登陆成功，把密码放到sessionstorage
      const { data, type } = responseData;
      const { remember, userName } = params;
      if (type === 'success_login') {
        // dispatch action
        dispatch(loginSuccess({
          userName,
        }));
        if (remember) {
          // put the token in the localStorage
          window.localStorage.setItem('my-app-order-system', data);
        }
      } else {
        let action;
        if (type === 'staff_no_exists') {
          action = loginFailure('The login name does not exist');
        }
        if (type === 'fail_password_wrong') {
          action = loginFailure('Password mistake');
        }
        dispatch(action as AnyAction);
      }
    })
    .catch((reason) => dispatch(loginFailure(JSON.stringify(reason))));
};
