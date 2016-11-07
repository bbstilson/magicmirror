import Ratio from 'components/layout/Ratio';
import DraggableMirror from './DraggableMirror/DraggableMirror';
import StaticMirror from './StaticMirror/StaticMirror';

import Context from 'constants/context';
import './MagicMirror.css';

import React, { PropTypes } from 'react';
import { connect } from 'react-redux';

const MagicMirror = ({ renderContext, portrait }) => (
  <div className="full-width magicmirror">
    <Ratio x={2} y={1} portrait={portrait}>
      {(width, height) => {
        const props = { width, height };

        return renderContext === Context.LIVE_VIEW
          ? <DraggableMirror {...props} />
          : <StaticMirror {...props} />;
      }}
    </Ratio>
  </div>
);

MagicMirror.propTypes = {
  renderContext: PropTypes.string.isRequired,
  portrait: PropTypes.bool.isRequired,
};

/**
 * Redux
 */

function mapStateToProps ({ layout }) {
  return {
    portrait: layout.portrait
  };
}

export default connect(mapStateToProps)(MagicMirror);
