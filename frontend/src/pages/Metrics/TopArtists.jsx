export default function TopArtists({topArtists}) {
    return (
        <div className="top-artists">
        <h1>Top Artists</h1>
        {topArtists.map((a, idx)=>(
            <div className="top-song-artist">
            <img className="top-img" src={a.images[0].url} alt={a.name}/>
            <p>{a.name}</p>
            </div>
        ))}
        </div>
    )
}