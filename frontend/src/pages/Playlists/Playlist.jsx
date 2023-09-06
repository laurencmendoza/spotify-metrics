export default function Playlist({playlists}) {
    return(
        <div className="playlists">
            {playlists.items.map((i, idx)=>(
                <div className="playlist">
                    <img className="playlist-img" src={i.images[0].url} height="200" width="200"/>
                    <p className="playlist-title">{i.name}</p>
                </div>
            ))}
        </div>
    )
}