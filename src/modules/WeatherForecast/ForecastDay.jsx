import React, { Component, PropTypes } from 'react';
import moment from 'moment';

export default class ForecastDay extends Component {
  static propTypes = {
    getIcon: PropTypes.func.isRequired,
    forecast: PropTypes.shape({
      time: PropTypes.number.isRequired,
      temperatureMax: PropTypes.number.isRequired,
      temperatureMin: PropTypes.number.isRequired
    }).isRequired
  }

  componentDidMount() {
    const { getIcon, forecast } = this.props;
    getIcon(this.icon, forecast.icon);
  }

  render() {
    return (
      <tr>
        <td className="weather-forecast__data">{moment.unix(this.props.forecast.time).format('ddd')}</td>
        <td className="weather-forecast__data">
          <canvas ref={n => this.icon = n} width="16px" height="16px"></canvas>
        </td>
        <td className="weather-forecast__data">{parseInt(this.props.forecast.temperatureMax, 10)}°</td>
        <td className="weather-forecast__data">{parseInt(this.props.forecast.temperatureMin, 10)}°</td>
      </tr>
    );
  }
}
