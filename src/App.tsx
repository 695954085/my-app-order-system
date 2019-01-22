import React from 'react';
import { connect } from 'react-redux';
import {
  BrowserRouter as Router,
  Redirect,
  Route,
  Switch,
  withRouter,
} from 'react-router-dom';
import './App.css';
import LoginContainer from './containers/LoginContainer';
import MainContainer from './containers/MainContainer';

function App({ isLogin }: AppContainerStateProps) {
  return (
    <div className='App'>
      <Switch>
        <Route exact path='/login' component={LoginContainer} />
        <Route
          exact
          path='/'
          render={(props) =>
            !isLogin ? <Redirect to='/login' /> : <MainContainer {...props} />
          }
        />
      </Switch>
    </div>
  );
}

const mapStateToProps = (state: ReducerType, ownProps: {}) => {
  return {
    isLogin: state.loginByUserName.userName === '' ? false : true,
  };
};

export default withRouter<any>(
  connect<AppContainerStateProps, {}, {}, ReducerType>(mapStateToProps)(App),
);
