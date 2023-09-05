import {Link} from 'react-router-dom'
import './Nav.css'

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
                Metrics (Last 4 Weeks)
            </Link>
            <Link className="logout nav-link" to="/logout">
                LOG OUT
            </Link>
        </nav>
    )
}