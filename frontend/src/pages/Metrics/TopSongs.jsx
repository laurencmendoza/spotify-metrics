export default function TopSongs({topSongs}) {
    return (
        <div className="top-songs">
            <h1 className="text-[2.5rem] py-6 font-bold">Top Songs</h1>
            {topSongs.map((s, idx)=>(
                <div className="top-song-artist bg-dark-gray rounded-sm">
                <p className="my-auto pl-2 font-bold">{idx+1}</p>
                <img className="top-img m-2" src={s.album.images[0].url} alt={s.album.name}/>
                <p className="my-auto">{s.name}</p>
                </div>
            ))}
        </div>
    )
}