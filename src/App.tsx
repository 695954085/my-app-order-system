import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './App.css';
import LoginContainer from './containers/LoginContainer';
import MainContainer from './containers/MainContainer';

export default function App() {
  return (
    <div className='App'>
      <Router>
        <Route exact path='/' component={MainContainer} />
        <Route exact path='/login' component={LoginContainer} />
      </Router>
    </div>
  );
}
