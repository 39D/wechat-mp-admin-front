import React from 'react';
import { Route } from 'react-router-dom';
import { propTypes, defaultProps } from './props';

const RouteWithLayout = ({ layout: Component, component: SubComponent, rest }) => (
  <Route
    {...rest}
    render={(matchProps) => (
      <Component {...matchProps}>
        <SubComponent {...matchProps} />
      </Component>
    )}
  />
);

RouteWithLayout.propTypes = propTypes;
RouteWithLayout.defaultProps = defaultProps;

export default RouteWithLayout;
