import {Link} from 'react-router-dom'
import './Nav.css'
import { logout } from '../../spotify'

export default function Nav() {
    return (
        <nav>
            <Link className="nav-link" to="/">
                Home
            </Link>
            <Link className="nav-link" to="/playlists">
                Playlists
            </Link>
            <Link className="nav-link" to="/metrics">
                Metrics <span>(Last 4 Weeks)</span>
            </Link>
            <button className="logout nav-link" onClick={logout}>
                LOG OUT
            </button>
        </nav>
    )
}