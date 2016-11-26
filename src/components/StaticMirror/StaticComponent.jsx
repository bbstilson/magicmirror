import { positionAndDimensionsToStyles } from 'utils/styles';
import './StaticComponent.css';

import React, { PropTypes } from 'react';
import classnames from 'classnames';

const StaticComponent = ({ component: Component, position, displayModuleBorders, ...rest }) => (
  <div
      className={classnames("static-component", { "static-component--bordered": displayModuleBorders })}
      style={positionAndDimensionsToStyles(position)}>
    <Component {...rest} />
  </div>
);

StaticComponent.propTypes = {
  component: PropTypes.func.isRequired,
  position: PropTypes.shape({
    top: PropTypes.number.isRequired,
    left: PropTypes.number.isRequired
  }).isRequired,
  displayModuleBorders: PropTypes.bool.isRequired
};

export default StaticComponent;
