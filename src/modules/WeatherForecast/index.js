import ForecastDay from './ForecastDay';

import { EndPoint } from 'constants/api';

import React, { Component } from 'react';
import Loading from 'react-simple-loading';
import axios from 'axios';
import './WeatherForecast.css';

export default class WeatherForecast extends Component {
  state = {
    loading: true,
    fourHours: (4 * 60 * 60 * 1000)
  }

  fetchWeather = () => {
    this.setState({ loading: true })
    // TODO: make these dynamic
    const url = `${EndPoint.WEATHER_FORECAST}?lat=${37.8267}&lon=${-122.4233}`;

    axios.get(url)
      .then(({ data }) => {
        this.setState({ data, loading: false });
      })
      .catch((err) => {
        this.setState({ loading: false });
        throw new Error(err);
      });
  }

  createIcon = (element, icon) => {
    /* eslint-disable */
    const skycon = new Skycons({ color: 'white' });
    /* eslint-disable */
    skycon.set(element, icon);
    skycon.play();
  }

  componentDidMount() {
    // Set up the timer.
    const weatherInterval = setInterval(this.fetchWeather, this.state.fourHours);
    this.setState({ weatherInterval });

    // Fetch the weather forecast.
    this.fetchWeather();
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
          : <table className="weather-forecast">
            <tbody>
              {data.data.map(forecast => 
                <ForecastDay key={forecast.time} getIcon={this.createIcon} forecast={forecast} />
              )}
            </tbody>
          </table>
        }
      </div>
    );
  }
}
