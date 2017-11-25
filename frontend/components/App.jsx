import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { AuthRoute, ProtectedRoute } from '../util/route_util';
import GreetingContainer from './greeting/greeting_container';
import SessionFormContainer from './session/session_form_container';

import MainContainer from './main/main_container';

const App = () => (
  <div>
    <Switch>
      <AuthRoute exact path="/" component={GreetingContainer} />
      <AuthRoute exact path="/login" component={GreetingContainer} />
      <AuthRoute exact path="/signup" component={GreetingContainer} />

      <ProtectedRoute path="/" component={MainContainer} />
    </Switch>

    <AuthRoute path="/login" component={SessionFormContainer} />
    <AuthRoute path="/signup" component={SessionFormContainer} />
  </div>
);

export default App;
