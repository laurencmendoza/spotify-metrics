export default function TopArtists({topArtists}) {
    return (
        <div className="top-artists">
        <h1 className="text-[2.5rem] py-6 font-bold">Top Artists</h1>
        {topArtists.map((a, idx)=>(
            <div className="top-song-artist bg-dark-gray rounded-sm">
            <p className="my-auto pl-2 font-bold">{idx+1}</p>
            <img className="top-img m-2" src={a.images[0].url} alt={a.name}/>
            <p className="my-auto">{a.name}</p>
            </div>
        ))}
        </div>
    )
}