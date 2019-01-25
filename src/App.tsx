import React from 'react';
import { connect } from 'react-redux';
import { Redirect, Route, Switch, withRouter } from 'react-router-dom';
import './App.css';
import LoginContainer from './containers/LoginContainer';
import MainContainer from './containers/MainContainer';
import {
  AppContainerOwnProps,
  AppContainerStateProps,
} from './types/containers/AppContainer';

function App({ isLogin }: AppContainerStateProps & AppContainerOwnProps) {
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

const mapStateToProps = (state: ReducerType, ownProps: AppContainerOwnProps) => {
  return {
    isLogin: state.loginByUserName.userName === '' ? false : true,
  };
};

export default withRouter(
  connect<AppContainerStateProps, {}, AppContainerOwnProps, ReducerType>(
    mapStateToProps,
  )(App),
);
