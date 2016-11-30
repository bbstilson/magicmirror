import React, { Component } from 'react';
import moment from 'moment';

// h:mm:ss a

export default class Clock extends Component {
  render() {
    return (
      <pre>{JSON.stringify(this.props, null, 2)}</pre>
    );
  }
}
