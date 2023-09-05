import './App.css';

// COMPONENTS
import Nav from '../components/Nav/Nav';
import { Route, Routes } from 'react-router-dom';

// PAGES
import Home from '../pages/Home/';
import Playlists from '../pages/Playlists';
import Metrics from '../pages/Metrics';


export default function App() {
  return (
    <div className="App">
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
  );
}
