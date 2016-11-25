import { Home, Dashboard, Settings, Login } from 'containers';
import { MatchWhenAuthorized, MatchWhenUnauthorized, NoMatch } from 'components/router';

import React, { PropTypes } from 'react';
import Match from 'react-router/Match';
import Miss from 'react-router/Miss';
import Router from 'react-router/BrowserRouter';
import { connect } from 'react-redux';

const Routes = ({ authed }) => (
  <Router>
    <div style={{ height: '100vh' }}>
      <Match exactly pattern="/" component={Home} />
      <MatchWhenUnauthorized pattern="/login" authed={authed} component={Login} />
      <MatchWhenAuthorized pattern="/dashboard" authed={authed} component={Dashboard} />
      <MatchWhenAuthorized pattern="/settings" authed={authed} component={Settings} />
      <Miss component={NoMatch}/>
    </div>
  </Router>
);

Routes.propTypes = {
  authed: PropTypes.bool.isRequired
};

function mapStateToProps({ auth }) {
  return {
    authed: auth.isAuthed
  };
}

export default connect(mapStateToProps)(Routes);
