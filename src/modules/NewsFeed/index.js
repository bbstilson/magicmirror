import { EndPoint } from 'constants/api';
import './NewsFeed.css';

import React, { Component } from 'react';
import Loading from 'react-simple-loading';
import moment from 'moment';
import axios from 'axios';

export default class NewsFeed extends Component {
  static defaultProps = {
    source: 'bbc-news'
  }

  state = {
    oneHour: (60 * 60 * 1000),
    article: {},
    loading: true
  }

  fetchArticle = (source) => {
    const SOURCE = source ? `?source=${source}` : '';
    const url = `${EndPoint.NEWS}/${SOURCE}`;

    axios.get(url)
      .then(({ data }) => {
        this.setState({ article: data, loading: false });
      })
      .catch(err => {
        throw new Error(err)
      });
  }

  componentDidMount() {
    // Set up the timer.
    const newsInterval = setInterval(this.fetchArticle, this.state.oneHour);
    this.setState({ newsInterval });

    // Get the current article.
    this.fetchArticle(this.props.source);
  }

  componentWillUnmount() {
    clearInterval(this.state.newsInterval);
  }

  render() {
    if (this.state.loading) {
      return <Loading color="#fff" stroke="2px" />;
    } else {
      const { title, description, author, publishedAt } = this.state.article;

      const nowUTC = moment.utc();
      const modifiedPublishedAt = publishedAt.replace(/[TZ]/g, ' ');
      const since = nowUTC.subtract(modifiedPublishedAt);

      return (
        <div className="news-feed flex--column--center">
          <p className="news-feed__author">{author}, {since.minutes()} minutes ago:</p>
          <p className="news-feed__title">{title}</p>
          <p className="news-feed__description">{description}</p>
        </div>
      );
    }
  }
}
