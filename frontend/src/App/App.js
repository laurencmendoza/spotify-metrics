import './App.css';
import { useEffect, useState } from 'react'
import { accessToken } from '../spotify'


// COMPONENTS
import Nav from '../components/Nav/Nav';
import { Route, Routes } from 'react-router-dom';

// PAGES
import Home from '../pages/Home/';
import Playlists from '../pages/Playlists';
import Metrics from '../pages/Metrics';
import PlaylistDetails from '../pages/Playlists/PlaylistDetails';

export default function App() {
  const [token, setToken] = useState(null);


  useEffect(()=> {
      setToken(accessToken)
    }, [])

  return (
    <div className="App">
      {!token ? (
        <div className="logged-out">
        <h1>Spotify Metrics</h1>
        <button className="login-button">
        <a href="http://localhost:8888/login" className="sign-in-button">
        LOG IN TO SPOTIFY
        </a>
        </button>
        </div>
      ) : (
        <div className="logged-in-display">
          <div className="navigation">
            <Nav/>
          </div>
          <div className="page-content">
            <Routes>
              <Route exact path="/" element={<Home/>} />
              <Route path="/playlists" element={<Playlists/>}/>
              <Route path="/metrics" element={<Metrics/>}/>
              <Route path="/playlists/:id" element={<PlaylistDetails/>}/>
            </Routes>
          </div>
        </div>
      )}
</div>
  );
}
