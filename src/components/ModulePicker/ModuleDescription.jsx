import CustomOptions from './CustomOptions';
import './ModuleDescription.css';

import React, { PropTypes } from 'react';

const ModuleDescription = ({ description, custom }) => (
  <div className="module-description">
    <p>{description}</p>
    {Object.keys(custom).length > 0 && <CustomOptions options={custom} />}
  </div>
);

ModuleDescription.propTypes = {
  description: PropTypes.string.isRequired
};

export default ModuleDescription;
