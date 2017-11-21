import React from 'react';
import ReactDOM from 'react-dom';
// import configureStore from './store/store';

// TESTING
import * as SessionAPIUtil from './util/session_api_util';

document.addEventListener('DOMContentLoaded', () => {
  const root = document.getElementById('root');
  // store
  ReactDOM.render(<h1>PlayThis</h1>, root);

  //TESTING
  window.login = SessionAPIUtil.login;
  window.signup = SessionAPIUtil.signup;
  window.logout = SessionAPIUtil.logout;
});
