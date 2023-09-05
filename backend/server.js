///////////////////////////////
// DEPENDENCIES
////////////////////////////////

// initialize .env variables
require("dotenv").config();

console.log(process.env.CLIENT_ID)

// pull PORT from .env, give default value of 4000 and establish DB Connection
const { PORT } = process.env;
const CLIENT_ID = process.env.CLIENT_ID;
const CLIENT_SECRET = process.env.CLIENT_SECRET;
const REDIRECT_URI = process.env.REDIRECT_URI;

// import express
const express = require('express');

const cors = require('cors')
const morgan = require('morgan')
const querystring = require('querystring')
const axios = require('axios')

// create application object
const app = express();

app.use(cors())
app.use(morgan('dev'))

/**
 * Generates a random string containing numbers and letters
 * @param  {number} length The length of the string
 * @return {string} The generated string
 */
const generateRandomString = length => {
    let text = '';
    const possible = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    for (let i = 0; i < length; i++) {
      text += possible.charAt(Math.floor(Math.random() * possible.length));
    }
    return text;
  };
  
  
  const stateKey = 'spotify_auth_state';
  
  app.get('/login', (req, res) => {
    const state = generateRandomString(16);
    res.cookie(stateKey, state);
  
    const scope = 'user-read-private user-read-email playlist-read-private playlist-read-collaborative user-top-read';
  
    const queryParams = querystring.stringify({
      client_id: CLIENT_ID,
      response_type: 'code',
      redirect_uri: REDIRECT_URI,
      state: state,
      scope: scope,
    });
  
    res.redirect(`https://accounts.spotify.com/authorize?${queryParams}`);
  });

  app.get('/callback', (req, res) => {
    const code = req.query.code || null;
  
    axios({
      method: 'post',
      url: 'https://accounts.spotify.com/api/token',
      data: querystring.stringify({
        grant_type: 'authorization_code',
        code: code,
        redirect_uri: REDIRECT_URI
      }),
      headers: {
        'content-type': 'application/x-www-form-urlencoded',
        Authorization: `Basic ${new Buffer.from(`${CLIENT_ID}:${CLIENT_SECRET}`).toString('base64')}`,
      },
    })
    .then(response => {
        if (response.status === 200) {
    
            const { refresh_token } = response.data;

            axios.get(`http://localhost:8888/refresh_token?refresh_token=${refresh_token}`)
              .then(response => {
                res.send(`<pre>${JSON.stringify(response.data, null, 2)}</pre>`);
              })
              .catch(error => {
                res.send(error);
              });
    
        } else {
          res.send(response);
        }
      })
      .catch(error => {
        res.send(error);
      });
  });

  app.get('/refresh_token', (req, res) => {
  const { refresh_token } = req.query;

  axios({
    method: 'post',
    url: 'https://accounts.spotify.com/api/token',
    data: querystring.stringify({
      grant_type: 'refresh_token',
      refresh_token: refresh_token
    }),
    headers: {
      'content-type': 'application/x-www-form-urlencoded',
      Authorization: `Basic ${new Buffer.from(`${CLIENT_ID}:${CLIENT_SECRET}`).toString('base64')}`,
    },
  })
    .then(response => {
      res.send(response.data);
    })
    .catch(error => {
      res.send(error);
    });
});



///////////////////////////////
// ROUTER MIDDLEWARE
////////////////////////////////

// test route
// app.get("/", (req, res) => {
//     res.send("hello world");
// });

///////////////////////////////
// LISTENER
////////////////////////////////
app.listen(PORT, () => console.log(`listening on PORT ${PORT}`));