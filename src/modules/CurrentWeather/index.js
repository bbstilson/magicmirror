import { EndPoint } from 'constants/api';

import React, { Component } from 'react';
import Loading from 'react-simple-loading';
import axios from 'axios';
import './CurrentWeather.css';

export default class CurrentWeather extends Component {
  state = {
    loading: true,
    quarterHour: (15 * 60 * 1000)
  }

  fetchWeather = () => {
    this.setState({ loading: true })
    // TODO: make these dynamic
    const url = `${EndPoint.CURRENT_WEATHER}?lat=${37.8267}&lon=${-122.4233}`;

    axios.get(url)
      .then(({ data }) => {
        this.setState({ data, loading: false });
        /* eslint-disable */
        const skycon = new Skycons({ color: 'white' });
        /* eslint-disable */
        skycon.set(this.icon, data.icon);
        skycon.play();
      })
      .catch(err => {
        this.setState({ loading: false });
        throw new Error(err);
      });
  }

  componentDidMount() {
    // Set up the timer.
    const weatherInterval = setInterval(this.fetchWeather, this.state.quarterHour);
    this.setState({ weatherInterval });

    // Get the current article.
    this.fetchWeather(this.props.source);
  }

  componentWillUnmount() {
    clearInterval(this.state.weatherInterval);
  }

  render() {
    const { loading, data } = this.state;

    return (
      <div>
        {
          loading
          ? <Loading color="#fff" stroke="2px" />
          : <div className="flex--column--center current-weather">
            <div className="flex--row--center current-weather__desc">
              <canvas ref={n => this.icon = n} width="50%" height="50%"></canvas>
              <p className="current-weather__temp">{parseInt(data.temperature, 10)}°</p>
            </div>
            <p>{data.summary}</p>
          </div>
        }
      </div>
    );
  }
}
