import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';
import { fetchLoginByToken } from './actions/login.action';
import App from './App';
import './index.css';
import { store } from './reducers/index';
import * as serviceWorker from './serviceWorker';
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
