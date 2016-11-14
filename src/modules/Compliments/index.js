import compliments from './compliments';
import './Compliments.css';

import React, { Component } from 'react';

export default class Compliments extends Component {
  state = { oneHour: (60 * 60 * 1000) }

  pluck = () => {
    const randomIndex = Math.floor(Math.random() * (compliments.length));
    return compliments[randomIndex];
  }

  componentDidMount() {
    // Set up the timer.
    const complimentInterval = setInterval(() => {
      this.setState({
        compliment: this.pluck()
      });
    }, this.state.oneHour);

    // Add a compliment now.
    this.setState({
      complimentInterval,
      compliment: this.pluck()
    });
  }

  componentWillUnmount() {
    clearInterval(this.state.complimentInterval);
  }

  render() {
    return (
      <div className="compliments__container flex--column--center">
        <p className="compliments__text">{this.state.compliment}</p>
      </div>
    );
  }
}
