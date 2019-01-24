import {
  LOGIN_FAILURE,
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
} from '../constants/ActionTypes';
import { ActionType } from '../types/action/action';

let initialState: string | null | LoginByUserNameType = sessionStorage.getItem(
  'loginByuserNameInitialState',
);
if (initialState) {
  ((initialState as unknown) as LoginByUserNameType) = JSON.parse(initialState);
} else {
  let token = localStorage.getItem('my-app-order-system');
  if (!token) {
    token = '';
  }
  initialState = {
    error: '',
    isFetching: false,
    remember: false,
    token,
    userName: '',
  };
}

export function loginByUserName(
  state: LoginByUserNameType = initialState as LoginByUserNameType,
  action: ActionType,
) {
  switch (action.type) {
    case LOGIN_REQUEST:
      return {
        ...state,
        isFetching: true,
        remember: action.remember,
      };
    case LOGIN_SUCCESS:
      return {
        ...state,
        error: '',
        isFetching: false,
        remember: action.remember,
        token: action.token,
        userName: action.userName,
      };
    case LOGIN_FAILURE:
      return {
        ...state,
        error: action.error,
        isFetching: false,
        remember: false,
      };
    default:
      return state;
  }
}

export const getFetching = (state: ReducerType) =>
  state.loginByUserName.isFetching;
export const getErrorMessage = (state: ReducerType) =>
  state.loginByUserName.error;
