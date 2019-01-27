import { combineReducers } from 'redux';
import { applyMiddleware, compose, createStore } from 'redux';
import { createLogger } from 'redux-logger';
import thunk from 'redux-thunk';
import { ActionType } from '../types/action/action';
import { loginByUserName } from './login.reducer';
const middleware: any[] = [thunk];
if (process.env.NODE_ENV !== 'production') {
  middleware.push(createLogger());
}

const reducer = combineReducers<ReducerType, ActionType>({
  loginByUserName,
});

const composeEnhancers =
  (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
export const store = createStore(
  reducer,
  composeEnhancers(applyMiddleware(...middleware)),
);
