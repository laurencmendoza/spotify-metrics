export default function TopSongs({topSongs}) {
    return (
        <div className="top-songs mx-4">
            <h1 className="text-[2.5rem] pt-6 font-bold">Top Songs</h1>
            <p className="text-xl">(Last 6 Months)</p>
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