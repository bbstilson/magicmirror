import React, { Component, PropTypes } from 'react';

export default class Ratio extends Component {
  static propTypes = {
    x: PropTypes.number.isRequired,
    y: PropTypes.number.isRequired,
    children: PropTypes.func.isRequired,
    portrait: PropTypes.bool.isRequired
  };

  state = { width: 0, height: 0 }

  getComputedDimensions = ({ x, y }) => {
    let { width } = this.refs.container.getBoundingClientRect();
    let height = width * (y / x);

    if (height > window.innerHeight) {
      height = window.innerHeight;
      width = ((height * x) / y);
    }
    return { width, height };
  };

  componentWillReceiveProps(next) {
    this.setState(this.getComputedDimensions(next));
  }

  componentDidMount() {
    this.setState({
      ...this.getComputedDimensions(this.props),
      hasComputed: true
    });

    window.addEventListener('resize', this.handleResize, false);
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.handleResize, false);
  }

  handleResize = () => {
    this.setState({
      hasComputed: false
    }, () => {
      this.setState({
        hasComputed: true,
        ...this.getComputedDimensions(this.props)
      });
    });
  };

  render() {
    const { width, height } = this.state;

    return (
      <div ref="container" className="full-width">
        {this.props.children(width, height)}
      </div>
    );
  }
}
