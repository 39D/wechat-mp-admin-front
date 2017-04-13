import { Provider } from 'react-redux';
import ReactDOM from 'react-dom';
import React from 'react';

import AppRoutes from 'routes';
import store from 'store';

import 'index.html';

ReactDOM.render(
  <Provider store={store}>
    <AppRoutes />
  </Provider>,
  document.getElementById('root')
);
