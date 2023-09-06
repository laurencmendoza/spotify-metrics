export default function TopArtists({topArtists}) {
    return (
        <div className="top-artists">
        <h1>Top Artists</h1>
        {topArtists.map((a, idx)=>(
            <p>{a.name}</p>
        ))}
        </div>
    )
}