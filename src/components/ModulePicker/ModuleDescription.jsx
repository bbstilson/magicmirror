import './ModuleDescription.css';

import React, { PropTypes } from 'react';

const ModuleDescription = ({ description }) => (
  <div className="module-description">
    <p>{description}</p>
  </div>
);

ModuleDescription.propTypes = {
  description: PropTypes.string.isRequired
};

export default ModuleDescription;
