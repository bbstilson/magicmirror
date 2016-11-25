import NavigationIcons from 'components/general/NavigationIcons';
import Checkbox from 'components/general/Checkbox';

import dashboardIcon from 'components/general/icons/dashboard.png';
import magicmirrorIcon from 'components/general/icons/magicmirror.png';
import { rotateOrientation } from 'redux/modules/layout';
import { logout } from 'redux/modules/auth';
import './Settings.css';

import React, { Component } from 'react';
import { connect } from 'react-redux';

const config = [
  {
    src: magicmirrorIcon,
    to: '/'
  },
  {
    src: dashboardIcon,
    to: '/dashboard'
  }
];

class Settings extends Component {
  toggleOrientation = () => {
    this.props.rotateOrientation();
  }

  logout = () => {
    this.props.logout();
  }

  render() {
    const { portrait } = this.props;

    return (
      <div className="flex--column--center full">
        <NavigationIcons navConfig={config} />
        <h1 className="settings__title">Settings</h1>
        <div className="settings__container">
          <Checkbox value="Portrait" onClick={this.toggleOrientation} active={portrait} />
          <Checkbox value="Logout" onClick={this.logout} active />
        </div>
      </div>
    );
  }
}

/**
 * Redux
 */

function mapStateToProps ({ layout }) {
  return {
    portrait: layout.portrait
  };
}

function mapDispatchToProps (dispatch) {
  return {
    rotateOrientation() {
      dispatch(rotateOrientation());
    },
    logout() {
      dispatch(logout());
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Settings);
