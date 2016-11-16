import { login } from 'redux/modules/auth';

import React, { Component } from 'react';
import { connect } from 'react-redux';
import Redirect from 'react-router/Redirect';

class Login extends Component {
  state = { redirectToReferrer: false };

  render() {
    const { state } = this.props.location;
    const from = state ? state.from : {};

    return (
      <div>
        <h1>I'm the login page!</h1>
        {this.state.redirectToReferrer && <Redirect to={from.pathname || '/'} />}
        <button onClick={this.props.auth}>Login</button>
      </div>
    );
  }
}

/**
 * REDUX
 */

function mapStateToProps () {
  return {};
}

function mapDispatchToProps (dispatch) {
  return {
    auth() {
      dispatch(login());
    },
    isAuthed() {
      // dispatch(isAuthed())
    },
    unauth() {
      // dispatch(unauth())
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Login);
