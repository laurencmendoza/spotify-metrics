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
        <button>
        <a href="http://localhost:8888/login" className="signInButton">
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
            </Routes>
          </div>
        </div>
      )}
</div>
  );
}
