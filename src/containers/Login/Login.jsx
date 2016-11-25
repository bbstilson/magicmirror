import LoginLoading from './LoginLoading';

import { login } from 'redux/modules/auth';
import './Login.css';

import React, { PropTypes, Component } from 'react';
import { connect } from 'react-redux';
import classnames from 'classnames';

class Login extends Component {
  static propTypes = {
    authenticating: PropTypes.bool.isRequired,
    login: PropTypes.func.isRequired
  }

  state = {
    emailError: false,
    pwError: false
  };

  handleSubmit = (e) => {
    e.preventDefault();
    const email = e.target.email.value.trim();
    const pw = e.target.password.value.trim();

    if (email.length === 0) {
      this.setState({ emailError: true });
    } else if (pw.length === 0) {
      this.setState({ pwError: true });
    } else {
      this.props.login(email, pw);
    }
  }

  render () {
    const { emailError, pwError } = this.state;

    const emailClasses = classnames("login__input", { 'input-error': emailError });
    const pwClasses = classnames("login__input", { 'input-error': pwError });

    return (
      <div className="flex--column--center full-height login">
        <div className="login__container">
          {this.props.authenticating && <LoginLoading />}
          <div>
            <h1 className="login__title">Login</h1>
            {(emailError || pwError) && <p>Oops. Looks like you forgot to enter something...</p>}
            <form onSubmit={this.handleSubmit}>
              <input className={emailClasses} type="email" name="email" placeholder="Email" />
              <input className={pwClasses} type="password" name="password" placeholder="Password" />
              <button className="login__input login__submit" type="submit">Login</button>
            </form>
          </div>
        </div>
      </div>
    )
  }
}

/**
 * REDUX
 */

function mapStateToProps ({ auth }) {
  return {
    authenticating: auth.isFetching,
    authFailed: auth.error
  };
}

function mapDispatchToProps (dispatch) {
  return {
    login(email, pw) {
      dispatch(login(email, pw));
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Login);
