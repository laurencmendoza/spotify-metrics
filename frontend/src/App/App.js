import { useEffect, useState } from 'react'
import { accessToken } from '../spotify'


// COMPONENTS
import Nav from '../components/Nav/Nav';
import { Route, Routes } from 'react-router-dom';
import spotifyLogo from '../spotify-icons/Spotify_Logo_RGB_White.png'


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
          <div className="flex justify-center my-10">
            <img className="h-[4rem]" src={spotifyLogo} alt="white Spotify logo"/>
            <h1 className="text-[2.5rem] text-white">
              <span className="px-2 font-light">|</span>
              Metrics
            </h1>
          </div>
          <button className="
            block
            mx-auto
            mb-10
            text-[white] 
            font-bold 
            bg-spotify-green 
            rounded-3xl 
            h-[3rem] 
            py-0 
            px-[24px] 
            divide-none 
            hover:scale-[1.02]">
            <a href={LOGIN_URI} className="text-xl">LOG IN TO SPOTIFY</a>
            </button>
            <div className="bg-white-smoke text-[black] min-h-[80vh] mx-auto">
                <h1 className="text-2xl font-bold pt-10 pb-4 text-center px-4">View Spotify's audio analytics for the tracks in your saved playlists</h1>
                <div className="mx-auto max-w-[720px] px-8">
                    <p className="text-xl xl:text-2xl my-4"> <span className="font-bold">My Spotify Metrics</span> allows you to view the following audio features:  </p>
                    <ul className="text-left pl-8 max-w-[600px] list-decimal xl:text-xl">
                        <li><span className="font-bold">Tempo</span>: The overall estimated tempo of a track in beats per minute (BPM).</li>
                        <li><span className="font-bold">Time signature</span>: The estimated time signature, which is a notational convention to specify how many beats are in each bar or measure.</li>
                        <li><span className="font-bold">Bars</span>: A segment of music that holds a given number of beats. A bar is a unit of time for a piece of music. </li>
                        <li><span className="font-bold">Key</span>: The estimated overall key of the track.</li>
                        <li><span className="font-bold">Mode</span>: Indicates the modality (major or minor) of a track, the type of scale from which its melodic content is derived.</li>
                        <li><span className="font-bold">Loudness</span>: The overall loudness of a track in decibels (dB). Loudness values are averaged across the entire track. Loudness is the quality of a sound that correlates to its physical strength (amplitude). Values typically range between -60 and 0 db.</li>
                    </ul>
                </div>
                <h1 className="text-2xl font-bold pt-10 pb-4 text-center px-4">View your top artists and top tracks based on your listening history</h1>
                <div className="mx-auto max-w-[720px] px-8">
                    <p className="text-xl xl:text-2xl my-4"><span className="font-bold">My Spotify Metrics</span> allows you to view your top songs and top artists for the following time ranges:</p>
                    <ul className="text-left pl-8 max-w-[600px] list-disc xl:text-xl pb-12">
                        <li><span className="font-bold">Long term</span>: calculated from several years of data and including all new data as it becomes available</li>
                        <li><span className="font-bold">Medium term</span>: approximately the last 6 months</li>
                        <li><span className="font-bold">Short term</span>: approximately the last 4 weeks</li>
                    </ul>
                </div>
            </div>
          
        </div>
      ) : (
        <div className="sm:flex min-h-[100vh]">
          <div>
            <Nav/>
          </div>
          <div className="w-full">
            <Routes>
              <Route exact path="/" element={<Home/>} />
              <Route path="/playlists" element={<Playlists/>}/>
              <Route path="/metrics/:id" element={<Metrics/>}/>
              <Route path="/playlists/:id" element={<PlaylistDetails/>}/>
            </Routes>
          </div>
        </div>
      )}
</div>
  );
}
