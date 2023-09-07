import { Link } from "react-router-dom"
import './Playlists.css'

export default function Playlist({playlists}) {
    return(
        <div className="playlists">
            {playlists.items.map((i, idx)=>(
                <div className="playlist">
                    <Link to={`/playlists/${i.id}`}>
                        {i.images[0] ? (
                            <img className="playlist-img" src={i.images[0].url} height="200" width="200" alt="playlist cover"/>
                        ) : (<img className="playlist-img" src="https://cdnweb.anghami.com/web/assets/img/placeholders/playlist-placeholder.png" height="200" width="200" alt="playlist cover placeholder"/>)}
                    </Link>
                    <p className="playlist-title">{i.name}</p>
                </div>
            ))}
        </div>
    )
}