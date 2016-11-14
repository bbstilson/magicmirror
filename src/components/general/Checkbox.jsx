import React, { PropTypes } from 'react';
import './Checkbox.css';

const Checkbox = ({ value, onClick, active }) => (
  <div className="checkbox">
    <span>{value}</span>
    <div onClick={onClick} className={`checkbox__button${active ? ' checkbox__button--active' : ''}`} />
  </div>
);

Checkbox.propTypes = {
  value: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
  active: PropTypes.bool.isRequired
};

export default Checkbox;
