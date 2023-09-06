const querystring = require('querystring')
const axios = require('axios')
const CLIENT_ID = process.env.CLIENT_ID;
const CLIENT_SECRET = process.env.CLIENT_SECRET;
const REDIRECT_URI = process.env.REDIRECT_URI;

/**
 * Generates a random string containing numbers and letters
 * @param  {number} length The length of the string
 * @return {string} The generated string
 */

module.exports = {
    login, 
    callback,
    refresh: refreshToken, 
    playlistDetails
}

const generateRandomString = length => {
    let text = '';
    const possible = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    for (let i = 0; i < length; i++) {
      text += possible.charAt(Math.floor(Math.random() * possible.length));
    }
    return text;
};

const stateKey = 'spotify_auth_state';

function login(req, res) {
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
}

function callback(req, res) {
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
    
            const { access_token, refresh_token, expires_in } = response.data;



            const queryParams = querystring.stringify({
                access_token,
                refresh_token,
                expires_in,
            })

            // redirect to react app
            res.redirect(`http://localhost:3000/?${queryParams}`)

            // pass along tokens in query params

        } else {
            res.redirect(`/?${querystring.stringify( {error: 'invalid_token'})}`);
        }
    })
        .catch(error => {
            res.send(error);
        });
}

function refreshToken(req,res) {
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
}