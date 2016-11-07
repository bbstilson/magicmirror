import './HalfPane.css';

import React, { PropTypes } from 'react';
import classnames from 'classnames';

const HalfPane = ({ children, border }) => (
  <div className={classnames('halfpane', { 'halfpane--border': border })}>
    {children}
  </div>
);

HalfPane.propTypes = {
  children: PropTypes.element.isRequired,
  border: PropTypes.bool
};

export default HalfPane;
