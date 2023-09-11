export default function TopArtists({ topArtists, timeRange }) {
    return (
        <div className="w-[320px] sm:w-[400px] xl:w-[480px] mx-auto">
            <h1 className="text-[1.75rem] sm:text-[2.5rem] font-bold pl-2">Top Artists</h1>
            <p className="sm:text-xl mb-6 pl-2">({timeRange})</p>
            {topArtists.map((a, idx) => (
            <div className="flex gap-[10px] m-[0.5rem] bg-dark-gray rounded-sm">
                {idx < 9 ? (<p className="my-auto pl-2 font-bold mr-2">{idx+1}</p>) : (
                            <p className="my-auto pl-2 font-bold">{idx+1}</p>)}
                <img 
                    className="h-[50px] min-w-[50px] w-auto my-2"
                    src={a.images[0].url}
                    alt={a.name}
                />
                <a className="my-auto hover:underline hover:underline-offset-2" target="_blank" href={a.external_urls.spotify}>
                    <p className="xl:text-lg my-auto">{a.name}</p>
                </a>
            </div>
            ))}
        </div>
    );
}