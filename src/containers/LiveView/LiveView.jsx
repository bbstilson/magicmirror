import MagicMirror from 'containers/MagicMirror/MagicMirror';

import Context from 'constants/context';
import './LiveView.css';

import React from 'react';

export default () => (
  <div className="full flex--column--center">
    <MagicMirror renderContext={Context.LIVE_VIEW} />
  </div>
);
