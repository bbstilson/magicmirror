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
    let { width, height } = this.refs.container.getBoundingClientRect();
    
    // If portrait, we know the height and need to find the width
    // else, we know the width and need to find the height
    if (this.props.portrait) {
      width = height * x / y;
    } else {
      height = width * x / y;
    }

    // Check that the dimensions aren't larger than the possible area.
    if (height > window.innerHeight) {
      height = window.innerHeight;
      width = height * x / y;
    } else if (width > window.innerWidth) {
      width = window.innerWidth;
      height = width * x / y;
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
      <div ref="container" className={`full-${this.props.portrait ? 'height' : 'width'}`}>
        {this.props.children(width, height)}
      </div>
    );
  }
}
