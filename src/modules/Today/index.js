import moment from 'moment';
import './Today.css';

import React from 'react';

// http://momentjs.com/docs/#/displaying/format/
export default () => (
  <p className="today__text">{moment().format("dddd, MMMM Do YYYY")}</p>
);
