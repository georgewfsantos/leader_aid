import React from 'react';
import { Switch } from 'react-router-dom';
import Route from './Route';

import Dashboard from '~/pages/Dashboard';
import Profile from '~/pages/Profile';
import SignIn from '~/pages/SignIn';
import Requests from '~/pages/Requests';
import ShowDetails from '~/pages/Dashboard/ShowDetails';

// import { Container } from './styles';

export default function Routes() {
  return (
    <Switch>
      <Route path="/" exact component={Requests} />
      <Route path="/dashboard" component={Dashboard} isPrivate exact />
      <Route path="/login" component={SignIn} />
      <Route path="/profile" component={Profile} isPrivate />
      <Route
        path="/dashboard/:request_id/details"
        component={ShowDetails}
        isPrivate
      />
    </Switch>
  );
}
