import React, { Component } from 'react';
import Redirect from 'react-router/Redirect';

export default class Login extends Component {
  constructor() {
    super();
    this.state = { redirectToReferrer: false };
  }

  login = () => {
    this.props.authenticate();
    this.setState({ redirectToReferrer: true });
  }

  render() {
    const { state } = this.props.location;
    const from = state ? state.from : {};

    return (
      <div>
        <h1>I'm the login page!</h1>
        {this.state.redirectToReferrer && <Redirect to={from.pathname || '/'} />}
        <button onClick={this.login}>Login</button>
      </div>
    );
  }
}
