import NavigationIcons from 'components/general/NavigationIcons';

import dashboardIcon from 'components/general/icons/dashboard.png';
import magicmirrorIcon from 'components/general/icons/magicmirror.png';
import './Settings.css';

import React, { Component } from 'react';

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

export default class Settings extends Component {
  render() {
    return (
      <div className="settings">
        <NavigationIcons navConfig={config} />
        <h1>I'm the settings components!</h1>
      </div>
    );
  }
}
