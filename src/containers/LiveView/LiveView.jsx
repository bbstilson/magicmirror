import MagicMirror from 'containers/MagicMirror/MagicMirror';

import Context from 'constants/context';
import './LiveView.css';

import React from 'react';

export default () => (
  <div className="liveview full">
    <h1 className="liveview__header">Live View</h1>
    <div className="liveview__view full">
      <MagicMirror renderContext={Context.LIVE_VIEW} />
    </div>
  </div>
);
