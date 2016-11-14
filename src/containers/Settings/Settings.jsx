import NavigationIcons from 'components/general/NavigationIcons';
import Checkbox from 'components/general/Checkbox';

import dashboardIcon from 'components/general/icons/dashboard.png';
import magicmirrorIcon from 'components/general/icons/magicmirror.png';
import { rotateOrientation } from 'redux/modules/layout';
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

  render() {
    const { portrait } = this.props;

    return (
      <div className="settings">
        <NavigationIcons navConfig={config} />
        <h1 className="settings__title">Settings</h1>
        <div className="settings__container">
          <Checkbox value="Portrait" onClick={this.toggleOrientation} active={portrait} />
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
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Settings);
