import {Link} from 'react-router-dom'
import './Nav.css'
import { logout } from '../../spotify'
import spotifyLogo from '../../spotify-icons/Spotify_Icon_RGB_Green.png'

export default function Nav() {
    return (
        <nav className="
        flex
        flex-col
        justify-start
        p-[1.5rem]
        bg-dark-gray
        h-full">
            <img className="
            spotify-logo" 
            src={spotifyLogo} alt="spotify logo in black"/>
            <Link className="
            nav-link 
            font-bold" 
            to="/">
                Home
            </Link>
            <Link className="
            nav-link
            font-bold" 
            to="/playlists">
                Playlists
            </Link>
            <Link className="
            nav-link
            font-bold" 
            to="/metrics">
                Metrics <span className="metrics-time-range">(Last 6 Months)</span>
            </Link>
            <button className="
            logout
            hover:bg-white
            hover:text-dark-gray
            nav-link
            " onClick={logout}>
                LOG OUT
            </button>
        </nav>
    )
}