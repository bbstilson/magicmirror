const path = require('path');
const express = require('express');
const axios = require('axios');
const utils = require('./utils');
const checkStatus = utils.checkStatus;

// SERVER SETUP
const app = express();
const port = (process.env.PORT || 4000);

// ALLOW CORS
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

// APIS
app.get('/api/news', (request, response) => {
  const ROOT = "https://newsapi.org/v1/articles";
  const SOURCE = `source=${request.query.source ? request.query.source : "bbc-news"}`
  const OPTIONS = "sortBy=top";
  const NEWS_API_KEY = "apiKey=d28dc7fedb1547e08b9aa4ee901a635a";
  const url = `${ROOT}?${SOURCE}&${OPTIONS}&${NEWS_API_KEY}`;

  axios.get(url)
    .then(checkStatus)
    .then(({ data }) => {
      // return first article
      response.json(data.articles[0]);
    })
    .catch(error => {
      response.json({
        status: error.status,
        statusText: error.statusText,
      });
    });
});


// RUN SERVER
app.listen(port, err => {
  if (err) {
    console.warn(`Error in app.listen: ${err}`);
    return;
  }

  console.log(`Listening at http://localhost:${port}`);
});
