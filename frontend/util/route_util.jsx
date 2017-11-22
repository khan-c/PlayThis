import React from 'react';
import {
  Route,
  Redirect,
  withRouter
} from 'react-router-dom';
import { connect } from 'react-redux';

const mapStateToProps = state => ({
  loggedIn: Boolean(state.session.currentUser)
});

const Auth = ({ loggedIn, path, component: Component}) => (
  <Route
    path={ path }
    render={ props => (
      loggedIn ? <Redirect to="/browse" /> : <Component {...props} />
    )}
  />
);

const Protected = ({ loggedIn, path, component: Component }) => (
  <Route
    path={ path }
    render={ props => (
      loggedIn ? <Component {...props} /> : <Redirect to="/" />
    )}
  />
);

export const AuthRoute = withRouter(connect(
  mapStateToProps
)(Auth));

export const ProtectedRoute = withRouter(connect(
  mapStateToProps
)(Protected));
