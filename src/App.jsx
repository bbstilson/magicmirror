import { Home, Dashboard, Settings, Login } from 'containers';
import { MatchWhenAuthorized, NoMatch } from 'components/router';
import './App.css';

import React, { Component } from 'react';
import { Provider } from 'react-redux';
import createStore from 'redux/create';
import Match from 'react-router/Match';
import Miss from 'react-router/Miss';
import Router from 'react-router/BrowserRouter';

const store = createStore();

export default class App extends Component {
  login = () => {
    localStorage.setItem("magicMirrorAuth", true);
  }

  isAuthorized = () => {
    return localStorage.getItem("magicMirrorAuth") === 'true';
  }

  render() {
    const isAuthorized = this.isAuthorized();

    return (
      <Provider store={store}>
        <Router>
          <div style={{ height: '100vh' }}>
            <Match exactly pattern="/" component={Home} />
            <Match
                exactly
                pattern="/login"
                render={props => 
                  <Login {...props} authenticate={this.login} />} />
            <MatchWhenAuthorized
                isAuthorized={isAuthorized}
                pattern="/dashboard"
                component={Dashboard} />
            <MatchWhenAuthorized
                isAuthorized={isAuthorized}
                pattern="/settings"
                component={Settings} />
            <Miss component={NoMatch}/>
          </div>
        </Router>
      </Provider>
    );
  }
}
