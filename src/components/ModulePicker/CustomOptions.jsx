import React, { Component, PropTypes } from 'react';

export default class CustomOptions extends Component {
  static propTypes = {
    options: PropTypes.object.isRequired
  }

  render() {
    return (
      <pre>{JSON.stringify(this.props.options, null, 2)}</pre>
    );
  }
}
