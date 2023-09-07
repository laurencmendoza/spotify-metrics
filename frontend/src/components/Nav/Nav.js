import {Link} from 'react-router-dom'
import './Nav.css'
import { logout } from '../../spotify'
import spotifyLogo from '../../spotify-icons/Spotify_Icon_RGB_Black.png'

export default function Nav() {
    return (
        <nav>
            <img className="spotify-logo" src={spotifyLogo} alt="spotify logo in black"/>
            <Link className="nav-link" to="/">
                Home
            </Link>
            <Link className="nav-link" to="/playlists">
                Playlists
            </Link>
            <Link className="nav-link" to="/metrics">
                Metrics <span className="metrics-time-range">(Last 6 Months)</span>
            </Link>
            <button className="logout nav-link" onClick={logout}>
                LOG OUT
            </button>
        </nav>
    )
}