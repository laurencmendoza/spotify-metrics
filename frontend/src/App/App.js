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
  const LOGIN_URI =
  process.env.NODE_ENV !== 'production'
    ? 'http://localhost:8888/login'
    : 'https://my-spotify-metrics-bab64fc6f36f.herokuapp.com/login';

  useEffect(()=> {
      setToken(accessToken)
    }, [])

  return (
    <div className="App">
      {!token ? (
        <div className="text-center">
        <h1 className="text-[2.5rem] font-bold">Spotify Metrics</h1>
        <button className="
          text-[white] 
          font-bold 
          bg-spotify-green 
          rounded-3xl 
          h-[3rem] 
          py-0 
          px-[24px] 
          divide-none 
          hover:scale-[1.02]">
        <a href={LOGIN_URI} 
        className="text-xl">
        LOG IN TO SPOTIFY
        </a>
        </button>
        </div>
      ) : (
        <div className="
          flex 
          min-h-[100vh]">
          <div className="w-[220px]">
            <Nav/>
          </div>
          <div className="w-full">
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
