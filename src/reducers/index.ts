import { combineReducers } from 'redux';
import { ActionType } from '../types/action/action';
import { loginByUserName } from './login.reducer';

export default combineReducers<ReducerType, ActionType>({
  loginByUserName,
});
