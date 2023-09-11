import {Link} from 'react-router-dom'
import spotifyLogo from '../../spotify-icons/Spotify_Icon_RGB_Green.png'

export default function Nav() {
    return (
        <div className="p-[1.5rem] bg-[black] h-full text-[white] text-[1.5rem]">
        <nav className="flex sm:flex-col sm:justify-start justify-between">
            <img className="h-[40px] w-[40px] sm:h-[70px] sm:w-[70px] sm:mx-auto my-0" src={spotifyLogo} alt="spotify logo in black"/>
            <Link className="sm:mt-[100px] sm:mb-10 sm:pl-4 font-bold text-[1.25rem] sm:text-[1.5rem]" to="/">
                Home
            </Link>
            <Link className="sm:my-10 sm:px-4 font-bold text-[1.25rem] sm:text-[1.5rem]" to="/playlists">
                Playlists
            </Link>
            <Link className="sm:my-10 sm:px-4 font-bold text-[1.25rem] sm:text-[1.5rem] mr-4 " to="/metrics/medium_term">
                Metrics
            </Link>
        </nav>
    </div>
    )
}