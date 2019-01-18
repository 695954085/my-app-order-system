import {
  LOGIN_FAILURE,
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
} from '../constants/ActionTypes';
import { ActionType } from '../types/action/action';

const initialState = {
  error: '',
  isFetching: false,
  userName: '',
};

export function loginByUserName(
  state: LoginByUserNameType = initialState,
  action: ActionType,
) {
  switch (action.type) {
    case LOGIN_REQUEST:
      return {
        ...state,
        isFetching: true,
      };
    case LOGIN_SUCCESS:
      return {
        isFetching: false,
        userName: action.userName,
      };
    case LOGIN_FAILURE:
      return {
        error: action.error,
        isFetching: false,
      };
    default:
      return state;
  }
}

export const getFetching = (state: ReducerType) => state.loginByUserName.isFetching;
export const getErrorMessage = (state: ReducerType) => state.loginByUserName.error;
