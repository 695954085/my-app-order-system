import PropTypes from 'prop-types';
import * as React from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router';
import { fetchLogin as fetchLoginMethod } from '../actions/login.action';
import Login from '../components/Login';
import { getErrorMessage, getFetching } from '../reducers/login.reducer';

const LoginContainer = ({
  fetchLogin,
  isFetching,
  error,
  isLogin,
}: ConnectLoginContainerPropTypes) => {
  if (isLogin) {
    return <Redirect to='/' />;
  }
  return <Login onSubmit={fetchLogin} isFetching={isFetching} error={error} />;
};

LoginContainer.propTypes = {
  error: PropTypes.string,
  fetchLogin: PropTypes.func.isRequired,
  isFetching: PropTypes.bool.isRequired,
  // isLogin: PropTypes.bool,
};

const mapStateToProps = (state: ReducerType) => ({
  error: getErrorMessage(state),
  isFetching: getFetching(state),
  isLogin: state.loginByUserName.userName === '' ? false : true,
});

export default connect<
  LoginContainerStateTypes,
  LoginContainerPropTypes,
  {},
  ReducerType
>(
  mapStateToProps,
  {
    fetchLogin: fetchLoginMethod,
  },
)(LoginContainer);
