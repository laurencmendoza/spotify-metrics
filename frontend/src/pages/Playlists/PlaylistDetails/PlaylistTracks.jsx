import PlaylistAudioAnalysis from "./PlaylistAudioAnalysis"

export default function PlaylistTracks({tracks}) {


    const tableData = tracks.map((t, idx)=> (
        <tr>
            <td className="p-track">
                <span className="p-track-name">
                {t.track.name} 
                </span>
            <p className="p-track-artist-album text-[lightgray]">
                <span>
                {t.track.artists[0].name}
                </span> ·
                <span>
                {t.track.album.name}
                </span>
            </p>
            </td>
            <PlaylistAudioAnalysis trackId={t.track.id}/>
        </tr>
    ))


    return (
        <div className="playlist-tracks border-[red]">
            
            <table className="mx-auto">
                <thead>
                <tr>
                    <th>Track</th>
                    <th>Tempo</th>
                    <th>Time Signature</th>
                    <th>Bars</th>
                    <th>Key</th>
                    <th>Mode</th>
                    <th>Loudness</th>
                </tr>
                </thead>
                <tbody>
                    {tableData}
                </tbody>
                
            </table>
        </div>
    )
}