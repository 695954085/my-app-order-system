import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';
import { AnyAction, applyMiddleware, compose, createStore } from 'redux';
import { createLogger } from 'redux-logger';
import thunk from 'redux-thunk';
import { fetchLoginByToken } from './actions/login.action';
import App from './App';
import './index.css';
import reducer from './reducers';
import * as serviceWorker from './serviceWorker';

const middleware: any[] = [thunk];
if (process.env.NODE_ENV !== 'production') {
  middleware.push(createLogger());
}

const composeEnhancers =
  (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(
  reducer,
  composeEnhancers(applyMiddleware(...middleware)),
);

// if sessionStorage don't exists, login using the logcalStorage token
const sessionStorage = window.sessionStorage.getItem(
  'loginByuserNameInitialState',
);
if (!sessionStorage) {
  const token = window.localStorage.getItem('my-app-order-system-token');
  if (token) {
    store.dispatch(fetchLoginByToken(token) as any);
  }
}
store.subscribe(() => {
  // when the store update, sessionStorage store state which use to restore state in the store when user
  // refresh the browser.
  const loginByUserNameState = store.getState().loginByUserName;
  window.sessionStorage.setItem(
    'loginByuserNameInitialState',
    JSON.stringify(loginByUserNameState),
  );
  // if remember and token are true, storage tokn in the localstorage
  if (
    store.getState().loginByUserName.remember &&
    store.getState().loginByUserName.token
  ) {
    localStorage.setItem('my-app-order-system-token', store.getState()
      .loginByUserName.token as string);
  }
});

ReactDOM.render(
  <Provider store={store}>
    <Router>
      <App />
    </Router>
  </Provider>,
  document.getElementById('root'),
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
