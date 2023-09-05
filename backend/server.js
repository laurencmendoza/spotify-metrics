///////////////////////////////
// DEPENDENCIES
////////////////////////////////

// initialize .env variables
require("dotenv").config();

// pull PORT from .env, give default value of 4000 and establish DB Connection
const { PORT } = process.env;

// import express
const express = require('express');
const spotifyRouter = require('./routes/spotify')

const cors = require('cors')
const morgan = require('morgan')

// create application object
const app = express();

app.use(cors())
app.use(morgan('dev'))

///////////////////////////////
// ROUTER MIDDLEWARE
////////////////////////////////
app.use('/', spotifyRouter)

// test route
// app.get("/", (req, res) => {
//     res.send("hello world");
// });

///////////////////////////////
// LISTENER
////////////////////////////////
app.listen(PORT, () => console.log(`listening on PORT ${PORT}`));