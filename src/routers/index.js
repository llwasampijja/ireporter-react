// react libraries
import React from 'react';

// third-party libraries
import { connect } from 'react-redux';
import { Route, Redirect } from 'react-router-dom';

// utilities
import myIsAuthenticated from '../utilities';

// eslint-disable-next-line react/prop-types
const SecureRoute = ({ component: Component, isAuthenticated, ...rest }) => (
  <Route
    {...rest}
    render={props => (isAuthenticated ? (
      <Component {...props} />) : (
        <Redirect to="/sign-up" />)
    )}
  />
);

const mapStateToProps = () => ({
  isAuthenticated: !!myIsAuthenticated().username,
});

export default connect(mapStateToProps)(SecureRoute);
