import { positionAndDimensionsToStyles } from 'utils/styles';
import './StaticComponent.css';

import React, { PropTypes } from 'react';
import classnames from 'classnames';

const StaticComponent = ({ component: Component, position, width, height, displayModuleBorders, ...rest }) => (
  <div
      className={classnames("static-component", { "static-component--bordered": displayModuleBorders })}
      style={positionAndDimensionsToStyles(position, width, height)}>
    <Component {...rest} />
  </div>
);

StaticComponent.propTypes = {
  component: PropTypes.func.isRequired,
  position: PropTypes.shape({
    top: PropTypes.number.isRequired,
    left: PropTypes.number.isRequired
  }).isRequired,
  width: PropTypes.number.isRequired,
  height: PropTypes.number.isRequired,
  displayModuleBorders: PropTypes.bool.isRequired
};

export default StaticComponent;
