import MagicMirror from 'containers/MagicMirror/MagicMirror';
import NavigationIcons from 'components/general/NavigationIcons';

import Context from 'constants/context';
import dashboardIcon from 'components/general/icons/dashboard.png';
import settingsIcon from 'components/general/icons/settings.png';

import React from 'react';

const config = [
  {
    src: dashboardIcon,
    to: '/dashboard'
  },
  {
    src: settingsIcon,
    to: '/settings'
  }
];

export default () => (
  <div className="full">
    <NavigationIcons navConfig={config} />
    <MagicMirror renderContext={Context.HOME} />
  </div>
);
