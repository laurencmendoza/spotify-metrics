# Spotify Metrics

<p>Spotify Metrics is a full-stack, single-page application that allows users to view their Spotify listening metrics, as well as Spotify's audio analysis for their saved playlists. Users can see their top tracks and top artists for different time ranges: all time, the last 6 months, and the last 4 weeks. Using Spotify's audio analysis, users can view the audio features for all of the tracks within their saved playlists, including the track's tempo, time signature, bars, key, mode and loudness. </p>
<p>This application was created to provide Spotify listeners an opportunity to see which tracks and artists they've been enjoying, without having to wait for Spotify wrapped at the end of the calendar year. It also allows Spotify users to quickly find tracks that fit their needs, using parameters like tempo, for example. Useful for runners who may be looking for tracks with a certain tempo to match their running cadence, or dancers who need to find tracks with a waltz time signature, or for a DJ looking for songs in the same key for a potential mashup, and many more.</p>

## Screenshots

### Home Screen
<img width="1462" alt="Screenshot 2023-09-11 at 12 49 24 PM" src="https://github.com/laurencmendoza/spotify-metrics/assets/137251999/58929f34-67e5-46ba-86dd-f0e42ffe2876">

### Home Screen (user logged in)
<img width="1468" alt="Screenshot 2023-09-11 at 12 49 41 PM" src="https://github.com/laurencmendoza/spotify-metrics/assets/137251999/f74d7fcc-b0f0-4602-8c4f-28c52944361e">

### Playlists
<img width="1466" alt="Screenshot 2023-09-11 at 12 49 57 PM" src="https://github.com/laurencmendoza/spotify-metrics/assets/137251999/4bbce82c-2137-408d-bd42-7f0bb3ad5ad9">

### Playlist Details
<img width="1468" alt="Screenshot 2023-09-11 at 12 51 32 PM" src="https://github.com/laurencmendoza/spotify-metrics/assets/137251999/981bc277-e149-4bfa-a05a-9b8825623ae8">

### Metrics
<img width="1466" alt="Screenshot 2023-09-11 at 12 50 24 PM" src="https://github.com/laurencmendoza/spotify-metrics/assets/137251999/3c6874e4-8824-42ab-8d56-8c2daf3b9bfc">


## Technologies Used 

- React
- Express
- Node.js
- Spotify's Web API
- Heroku
- Tailwind

## Key Resources

1. [Spotify for Developers](https://developer.spotify.com/documentation/web-api)
2. [Build a Spotify Connected App](https://www.newline.co/courses/build-a-spotify-connected-app)
3. [Tailwind Docs](https://tailwindcss.com/docs/installation)
4. [CSS loaders and spinners](https://cssloaders.github.io/)


## Inspiration

1. [Spotify Profile](https://spotify-profile.herokuapp.com/)
2. [Sort Your Music](http://sortyourmusic.playlistmachinery.com/index.html)
3. [Receiptify](https://receiptify.herokuapp.com/)

## Getting Started 

This application is still in Development Mode, so if you would like to test the application, contact me at lauren.camille.mendoza@gmail.com and provide me with the email address that you use to log in to Spotify. I will allow access to your account so you can view your Spotify account information in the application. 

Click [here](https://my-spotify-metrics-bab64fc6f36f.herokuapp.com/) to open the app!

## Future Features

- Sort tracks in your playlists by audio features (e.g. tempo, bars, loudness)
- Click on track details to see even more audio features (e.g. danceability, energy, valence)
- View audio features for an entire playlist (e.g. danceability, energy, valence)
- Search tracks on Spotify and view audio features for each track
- Search playlists and albums and view audio features for entire playlist/album
- Light mode
- Improved mobile responsiveness for playlist details page

## Known Issues

- Application needs to be approved through Spotify to allow for an extended quota of users, which will allow all Spotify users to log in to the application and view their data
- After an hour, access key resets, and user is not be able to see information from Spotify's API without manually refreshing the page

