import * as React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import Main from '../components/Main';
import { MainContainerOwnProps } from '../types/containers/MainContainer';

const MainContainer = (props: MainContainerOwnProps) => <Main {...props} />;

const mapStateToProps = (state: ReducerType) => ({});

export default withRouter(
  connect<{}, {}, MainContainerOwnProps, ReducerType>(mapStateToProps)(
    MainContainer,
  ),
);
