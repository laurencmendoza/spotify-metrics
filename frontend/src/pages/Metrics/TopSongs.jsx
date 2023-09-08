export default function TopSongs({topSongs, timeRange}) {
    return (
        <div className="w-[400px] mx-auto">
            <h1 className="text-[2.5rem] font-bold">Top Songs</h1>
            <p className="text-xl mb-6">({timeRange})</p>
            {topSongs.map((s, idx)=>(
                <div className="flex gap-[10px] m-[0.5rem] bg-dark-gray rounded-sm">
                <p className="my-auto pl-2 font-bold">{idx+1}</p>
                <img 
                    className="h-[50px] w-auto m-2" 
                    src={s.album.images[0].url} 
                    alt={s.album.name}
                />
                <p className="my-auto">{s.name}</p>
                </div>
            ))}
        </div>
    )
}