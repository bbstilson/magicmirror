import React, { Component } from 'react';
import { connect } from 'react-redux';
import moment from 'moment';
import './ClockModule.css';

class Analogue extends Component {
  render() {
    return <h1>Analogue</h1>
  }
}

class ClockModule extends Component {
  state = { now: Date.now() }

  componentDidMount() {
    // Set up the timer.
    const clockInterval = setInterval(() => {
      this.setState({ now: Date.now() });
    }, 1000);

    this.setState({ clockInterval });
  }

  componentWillUnmount() {
    clearInterval(this.state.clockInterval);
  }

  render() {
    const { isDigital, display } = this.props;

    return isDigital
      ? <h1 className="clock-module">{moment(this.state.now).format(display)}</h1>
      : <Analogue />

  }
}

function mapStateToProps ({ clock }) {
  return {
    isDigital: clock.isDigital,
    display: clock.display
  };
}

export default connect(mapStateToProps)(ClockModule);
