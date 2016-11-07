import MagicMirror from 'containers/MagicMirror/MagicMirror';
import RotateOrientation from 'components/general/RotateOrientation';

import Context from 'constants/context';
import './LiveView.css';

import React from 'react';

export default () => (
  <div className="liveview full">
    <RotateOrientation />
    <h1 className="liveview__header">Live View</h1>
    <div className="liveview__view full">
      <MagicMirror renderContext={Context.LIVE_VIEW} />
    </div>
  </div>
);
