import React, { PropTypes } from 'react';
import Match from 'react-router/Match';
import Redirect from 'react-router/Redirect';

const MatchWhenAuthorized = ({ isAuthorized, component: Component, ...rest }) => (
  <Match {...rest} render={props => (
      isAuthorized ? 
      <Component {...props} /> :
      <Redirect to={{ pathname: '/login', state: { from: props.location }}} />
    )} />
);

MatchWhenAuthorized.propTypes = {
  isAuthorized: PropTypes.bool.isRequired,
  component: PropTypes.func.isRequired
};

export default MatchWhenAuthorized;
