import './LiveModule.css';
import ItemType from 'constants/itemtype';
import Module from 'models/Module';
import { positionAndDimensionsToStyles } from 'utils/styles';

import React, { PropTypes } from 'react';
import { DragSource } from 'react-dnd';

const LiveModule = ({ children, connectDragSource, isDragging, position, Y, X }) => {
  if (isDragging) return null;

  return connectDragSource(
    <div
        className="live-module__container flex--column--center"
        style={positionAndDimensionsToStyles(position, Y, X)}>
      <span className="live-module__name">{children}</span>
    </div>
  );
};

LiveModule.propTypes = {
  children: PropTypes.string.isRequired,
  module: PropTypes.instanceOf(Module).isRequired,
  position: PropTypes.shape({
    top: PropTypes.number.isRequired,
    left: PropTypes.number.isRequired
  }).isRequired,
  Y: PropTypes.number.isRequired,
  X: PropTypes.number.isRequired,
  connectDragSource: PropTypes.func.isRequired,
  isDragging: PropTypes.bool.isRequired
};

/**
 * React DnD
 */
const liveModuleSource = {
  beginDrag(props) {
    const { module, position } = props;
    const { left, top } = position;
    return { module, left, top };
  }
};

function collect(connect, monitor) {
  return {
    connectDragSource: connect.dragSource(),
    isDragging: monitor.isDragging()
  }
}

export default DragSource(ItemType.LIVE_MODULE, liveModuleSource, collect)(LiveModule);
