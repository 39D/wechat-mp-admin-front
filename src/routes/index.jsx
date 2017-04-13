import React, { Component } from 'react';

import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';

import SignIn from 'containers/SignIn';
import LazyRouteWithLayout from './LazyRouteWithLayout';

const loadAdmin = (callback) => {
  require.ensure(['containers/Admin'], (require) => {
    callback(null, require('containers/Admin').default);
  }, 'Admin');
};

const loadDashboard = (callback) => {
  require.ensure(['containers/Dashboard'], (require) => {
    callback(null, require('containers/Dashboard').default);
  }, 'Dashboard');
};

class AppRoutes extends Component {
  componentWillMount() {
  }

  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Redirect exact from="/" to="/signIn" />
          <Route path="/signIn" component={SignIn} />
          <LazyRouteWithLayout path="/dashboard" getLayout={loadAdmin} getComponent={loadDashboard} />
        </Switch>
      </BrowserRouter>
    );
  }
}

export default AppRoutes;
