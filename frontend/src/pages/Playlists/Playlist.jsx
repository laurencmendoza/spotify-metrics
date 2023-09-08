import { Link } from "react-router-dom"
import './Playlists.css'

export default function Playlist({playlists}) {
    return(
        <div className="md:w-[65vw] lg:w-[75vw] xl:w-[85vw] grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 justify-center">
            {playlists.items.map((i, idx)=>(
                <div className="m-[15px] justify-self-center text-center w-[200px]">
                    <Link to={`/playlists/${i.id}`}>
                        {i.images[0] ? (
                            <img className="playlist-img" 
                                src={i.images[0].url} 
                                height="200" 
                                width="200" 
                                alt="playlist cover"/>
                        ) : (<img className="playlist-img bg-white-smoke" 
                                src="https://cdnweb.anghami.com/web/assets/img/placeholders/playlist-placeholder.png" 
                                height="200" 
                                width="200" 
                                alt="playlist cover placeholder"/>)}
                    </Link>
                    <p className="playlist-title pt-4">{i.name}</p>
                </div>
            ))}
        </div>
    )
}