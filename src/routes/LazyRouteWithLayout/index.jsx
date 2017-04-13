import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import { propTypes, defaultProps } from './props';

class LazyRouteWithLayout extends Component {
  state = {
    Layout: null,
    SubComponent: null
  }

  componentDidMount() {
    const { getLayout, getComponent } = this.props;
    getLayout((err, Layout) => {
      this.setState({ Layout });
    });
    getComponent((err, SubComponent) => {
      this.setState({ SubComponent });
    });
  }

  render() {
    const { rest } = this.props;
    const { Layout, SubComponent } = this.state;
    return (
      <Route
        {...rest}
        render={(matchProps) => (
          (
            Layout && SubComponent && <Layout {...matchProps}>
              <SubComponent {...matchProps} />
            </Layout>
          )
        )}
      />
    );
  }
}

LazyRouteWithLayout.propTypes = propTypes;
LazyRouteWithLayout.defaultProps = defaultProps;

export default LazyRouteWithLayout;
