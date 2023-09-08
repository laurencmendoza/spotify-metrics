import {Link} from 'react-router-dom'
import spotifyLogo from '../../spotify-icons/Spotify_Icon_RGB_Green.png'

export default function Nav() {
    return (
        <div className="p-[1.5rem] bg-[black] h-full text-[white] text-[1.5rem]">
        <nav className="flex flex-col justify-start">
            <img className="h-[70px] w-[70px] mx-auto my-0" src={spotifyLogo} alt="spotify logo in black"/>
            <Link className="mt-[100px] mb-8 pl-4 font-bold" to="/">
                Home
            </Link>
            <Link className="my-8 px-4 font-bold" to="/playlists">
                Playlists
            </Link>
            <Link className="my-8 px-4 font-bold" to="/metrics/medium_term">
                Metrics
            </Link>
        </nav>
        
    </div>
    )
}