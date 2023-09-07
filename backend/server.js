///////////////////////////////
// DEPENDENCIES
////////////////////////////////

// initialize .env variables
require("dotenv").config();

// pull PORT from .env, give default value of 4000 and establish DB Connection
const PORT = process.env.PORT || 8888;

// import express
const express = require('express');
const spotifyRouter = require('./routes/spotify')

const cors = require('cors')
const morgan = require('morgan')
const path = require('path');

// create application object
const app = express();

app.use(cors())
app.use(morgan('dev'))
// Priority serve any static files.
app.use(express.static(path.resolve(__dirname, '../frontend/build')));

///////////////////////////////
// ROUTER MIDDLEWARE
////////////////////////////////
app.use('/', spotifyRouter)

// All remaining requests return the React app, so it can handle routing.
app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, '../frontend/build', 'index.html'));
});

// test route
// app.get("/", (req, res) => {
//     res.send("hello world");
// });

///////////////////////////////
// LISTENER
////////////////////////////////
app.listen(PORT, () => console.log(`listening on PORT ${PORT}`));