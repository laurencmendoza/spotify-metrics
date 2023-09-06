export default function TopSongs({topSongs}) {
    return (
        <div className="top-songs">
            <h1>Top Songs</h1>
            {topSongs.map((s, idx)=>(
                <div className="top-song">
                <img className="song-album-img" src={s.album.images[0].url}/>
                <p>{s.name}</p>
                </div>
            ))}
        </div>
    )
}