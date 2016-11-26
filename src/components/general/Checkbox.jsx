import React, { PropTypes } from 'react';
import classnames from 'classnames';
import './Checkbox.css';

const Checkbox = ({ value, onClick, active }) => (
  <div className="checkbox flex--row--center flex--space-between">
    <span>{value}</span>
    <div onClick={onClick} className={classnames('checkbox__button', { 'checkbox__button--active': active})} />
  </div>
);

Checkbox.propTypes = {
  value: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
  active: PropTypes.bool.isRequired
};

export default Checkbox;
