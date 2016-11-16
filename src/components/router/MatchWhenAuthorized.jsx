import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import Match from 'react-router/Match';
import Redirect from 'react-router/Redirect';

const MatchWhenAuthorized = ({ isAuthed, component: Component, ...rest }) => (
  <Match {...rest} render={props => (
      isAuthed ? 
      <Component {...props} /> :
      <Redirect to={{ pathname: '/login', state: { from: props.location }}} />
    )} />
);

MatchWhenAuthorized.propTypes = {
  isAuthed: PropTypes.bool.isRequired,
  component: PropTypes.func.isRequired
};

/**
 * REDUX
 */

function mapStateToProps ({ auth }) {
  return {
    isAuthed: auth.isAuthed,
    isFetching: auth.isFetching,
    error: auth.error
  };
}

export default connect(mapStateToProps)(MatchWhenAuthorized);
