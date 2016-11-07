import HalfPane from 'components/layout/HalfPane';
import NavigationIcons from 'components/general/NavigationIcons';
import ModulePicker from 'containers/ModulePicker/ModulePicker';
import LiveView from 'containers/LiveView/LiveView';

import magicmirrorIcon from 'components/general/icons/magicmirror.png';
import settingsIcon from 'components/general/icons/settings.png';
import './Dashboard.css';

import React from 'react';

const config = [
  {
    src: magicmirrorIcon,
    to: '/'
  },
  {
    src: settingsIcon,
    to: '/settings'
  }
];

export default () => (
  <div className="dashboard">
    <NavigationIcons navConfig={config} />
    <HalfPane border>
      <ModulePicker />
    </HalfPane>
    <HalfPane>
      <LiveView />
    </HalfPane>
  </div>
);
