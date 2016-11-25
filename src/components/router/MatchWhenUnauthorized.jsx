import React, { PropTypes } from 'react';
import Match from 'react-router/Match';
import Redirect from 'react-router/Redirect';

const MatchWhenUnauthorized = ({component: Component, authed, ...rest}) => (
  <Match
    {...rest}
    render={(props) => authed === false
      ? <Component {...props} />
      : <Redirect to={props.location.state.from.pathname || '/dashboard'} />} />
);

MatchWhenUnauthorized.propTypes = {
  authed: PropTypes.bool.isRequired,
  component: PropTypes.func.isRequired
};

export default MatchWhenUnauthorized;
