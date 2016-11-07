import { positionAndDimensionsToStyles } from 'utils/styles';
import './StaticComponent.css';

import React, { PropTypes } from 'react';

const StaticComponent = ({ component: Component, position, width, height, ...rest }) => (
  <div className="static-component" style={positionAndDimensionsToStyles(position, width, height)}>
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
  height: PropTypes.number.isRequired
};

export default StaticComponent;
