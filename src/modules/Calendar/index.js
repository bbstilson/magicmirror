import React, { Component } from 'react';
import moment from 'moment';
import classnames from 'classnames';
import './Calendar.css';

export default class Calendar extends Component {
  constructor() {
    super();
    this.state = {
      daysOfTheWeek: ['S', 'M', 'T', 'W', 'T', 'F', 'S']
    };
  }

  createWeeks(now) {
    const start = now.startOf('month');
    const month = now.month();

    // potentially 5 "weeks" in a month
    return [0,0,0,0,0]
      .map(_ => {
        // 7 days per week
        return [0,0,0,0,0,0,0]
          .map((_, idx) => {
            if (idx === start.day()) {
              if (start.month() === month) {
                const date = start.date();
                start.add(1, 'd');
                return date;
              } else {
                // There are days in the week left, but they're not part of this month, e.g., 31st
                // is on a Tuesday, we still need to add enough days.
                return null;
              }
            } else {
              // There are days in the week before this month has started, e.g., Monday is the 31st
              // of last month, and this month starts on a Tuesday.
              return null;
            }
          });
      });
  }

  componentWillMount() {
    const now = moment();

    this.setState({
      today: now.date(),
      weeks: this.createWeeks(now),
      month: now.subtract(1, 'M').format('MMMM')
    });
  }

  render() {
    const { daysOfTheWeek,today, weeks, month } = this.state;

    return (
      <table className="calendar">
        <tbody>
          <tr className="calendar__month"><td colSpan={7}>{month}</td></tr>
          <tr className="calendar__header">{daysOfTheWeek.map((day, idx) => <td className='calendar__cell' key={idx}>{day}</td>)}</tr>
          {
            weeks.map((week, wIdx) =>
              <tr key={wIdx}>{
                week.map((day, dIdx) =>
                  <td className={classnames('calendar__cell', { 'active': today === day })} key={dIdx}>{day}</td>
                )}
              </tr>
            )
          }
        </tbody>
      </table>
    );
  }
}
