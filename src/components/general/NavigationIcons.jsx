import './NavigationIcons.css';

import React, { PropTypes } from 'react';
import Link from 'react-router/Link';

const NavigationIcons = ({ navConfig }) => (
  <div className="navigation-icon__container">
    {navConfig.map(({ to, src }) => {
      return (
        <Link to={to} key={src}>
          <img src={src} alt={`Link to ${to}`} className="navigation-icon__icon"/>
        </Link>
      );
    })}
  </div>
);

NavigationIcons.propTypes = {
  navConfig: PropTypes.arrayOf(PropTypes.shape({
    to: PropTypes.string.isRequired,
    src: PropTypes.string.isRequired
  }).isRequired).isRequired
};

export default NavigationIcons;
