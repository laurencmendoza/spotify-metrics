const express = require('express')
const router = express.Router()

const spotifyCtrl = require('../controllers/spotify')

router.get('/login', spotifyCtrl.login)

router.get('/callback', spotifyCtrl.callback)

router.get('/refresh_token', spotifyCtrl.refresh)

router.get('/playlists/:id', spotifyCtrl.playlistDetails)

module.exports = router
