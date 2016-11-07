import LiveModule from 'components/LiveView/LiveModule';

import ItemType from 'constants/itemtype';
import Module from 'models/Module';
import { updateModulePosition } from 'redux/modules/modules';
import './DraggableMirror.css';

import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { DragDropContext, DropTarget } from 'react-dnd';
import HTML5Backend from 'react-dnd-html5-backend';

class DraggableMirror extends Component {
  static propTypes = {
    width: PropTypes.number.isRequired,
    height: PropTypes.number.isRequired,
    activeModules: PropTypes.arrayOf(PropTypes.instanceOf(Module).isRequired),
    connectDropTarget: PropTypes.func.isRequired
  };

  moveModule = (module, position) => {
    this.props.updateModulePosition(module, position);
  };

  render() {
    const { width, height, connectDropTarget, activeModules } = this.props;

    return connectDropTarget(
      <div style={{ width, height }}>
        <div className="draggable-mirror" style={{ height }}>
          {activeModules.map((module) => {
            const { name, position, size } = module;
            const computedHeight = size.calculateHeightFrom(height);
            const computedWidth = size.square ? computedHeight : size.calculateWidthFrom(width);

            return (
              <LiveModule
                  key={name}
                  position={position}
                  module={module}
                  width={computedWidth}
                  height={computedHeight}>
                {name}
              </LiveModule>
            );
          })}
        </div>
      </div>
    );    
  }
}

/**
 * React DnD
 */
const windowTarget = {
  drop({ width, height }, monitor, component) {

    const module = monitor.getItem();
    const delta = monitor.getDifferenceFromInitialOffset();

    // Positions are in percentage, so they need to be converted from percentage, to pixel value,
    // then have the math done, then be converted back to a percentage. /me inhales.
    const left = +(Math.round((module.left / 100 * width) + delta.x) / width * 100).toFixed(3);
    const top = +(Math.round((module.top / 100 * height) + delta.y) / height * 100).toFixed(3);

    component.moveModule(module, { left, top });
  }
}

function collect (connect) {
  return {
    connectDropTarget: connect.dropTarget()
  };
}

/**
 * Redux
 */
function mapStateToProps ({ modules }) {
  return {
    activeModules: modules.activeModules,
  };
}

function mapDispatchToProps (dispatch) {
  return {
    updateModulePosition(module, position) {
      dispatch(updateModulePosition(module, position))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(
  DragDropContext(HTML5Backend)(
    DropTarget(ItemType.LIVE_MODULE, windowTarget, collect)(DraggableMirror)
  )
);
