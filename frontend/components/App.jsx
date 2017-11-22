import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { AuthRoute, ProtectedRoute } from '../util/route_util';
import GreetingContainer from './greeting/greeting_container';
import SessionFormContainer from './session/session_form_container';

//placeholder
import MainContainer from './main/main_container';

const App = () => (
  <div>
    <Switch>
      <ProtectedRoute path="/browse" component={MainContainer} />

      <AuthRoute path="/" component={GreetingContainer} />
    </Switch>

    <AuthRoute path="/login" component={SessionFormContainer} />
    <AuthRoute path="/signup" component={SessionFormContainer} />
  </div>
);

export default App;