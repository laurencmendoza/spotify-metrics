export default function TopArtists({ topArtists, timeRange }) {
    return (
        <div className="w-[320px] sm:w-[400px] xl:w-[480px] mx-auto">
            <h1 className="text-[1.75rem] sm:text-[2.5rem] font-bold pl-2">Top Artists</h1>
            <p className="sm:text-xl mb-6 pl-2">({timeRange})</p>
            {topArtists.map((a, idx) => (
            <div className="flex m-[0.5rem] bg-dark-gray rounded-sm">
                <p className="my-auto pl-2 font-bold xl:text-xl">{idx + 1}</p>
                <img 
                    className="h-[50px] w-auto m-2"
                    src={a.images[0].url}
                    alt={a.name}
                />
                <p className="my-auto xl:text-xl">{a.name}</p>
            </div>
            ))}
        </div>
    );
}