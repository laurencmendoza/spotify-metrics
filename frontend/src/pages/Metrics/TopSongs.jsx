export default function TopSongs({topSongs, timeRange}) {
    return (
        <div className="w-[320px] sm:w-[400px] xl:w-[480px] mx-auto">
            <h1 className="text-[1.75rem] sm:text-[2.5rem] font-bold pl-2">Top Songs</h1>
            <p className="sm:text-xl mb-6 pl-2">({timeRange})</p>
            {topSongs.map((s, idx)=>(
                <div className="flex gap-[10px] m-[0.5rem] bg-dark-gray rounded-sm">
                <p className="my-auto pl-2 font-bold xl:text-xl">{idx+1}</p>
                <a className="my-auto hover:underline hover:underline-offset-2" target="_blank" href={s.external_urls.spotify}>
                <img 
                    className="h-[50px] w-auto m-2" 
                    src={s.album.images[0].url} 
                    alt={s.album.name}
                />
                </a>
                <p className="xl:text-xl">{s.name}</p>
                
                </div>
            ))}
        </div>
    )
}