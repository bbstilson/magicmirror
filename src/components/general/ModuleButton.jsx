import './ModuleButton.css';

import React, { PropTypes } from 'react';
import classnames from 'classnames';

const ModuleButton = ({ onClick, children, primary, add, remove, active }) => (
  <button
      className={classnames("btn", 
        { 'btn--primary': primary },
        { 'btn--add': !active && add },
        { 'btn--remove': active && remove },
        { 'btn--default': (active && add) || (!active && remove) })}
      onClick={onClick}>
    {children}
  </button>
);

ModuleButton.propTypes = {
  onClick: PropTypes.func.isRequired,
  children: PropTypes.any.isRequired,
  primary: PropTypes.bool,
  active: PropTypes.bool,
  add: PropTypes.bool,
  remove: PropTypes.bool
};

export default ModuleButton;
