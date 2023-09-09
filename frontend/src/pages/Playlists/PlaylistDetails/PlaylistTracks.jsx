import PlaylistAudioAnalysis from './PlaylistAudioAnalysis'

export default function PlaylistTracks({tracks}) {
    const tableData = tracks.map((t, idx)=> (
        <tr>
            <td className="p-track">
                <span className="p-track-name">
                {t.track.name} 
                </span>
            <p className="text-[.9rem] flex gap-[.5rem] text-[lightgray]">
                <span>
                {t.track.artists[0].name}
                </span> ·
                <span className="mr-1">
                {t.track.album.name}
                </span>
            </p>
            </td>
            <PlaylistAudioAnalysis trackId={t.track.id}/>
        </tr>
    ))
    const arrayOfKeys = ['C', 'C♯', 'D', 'E♭', 'E', 'F', 'F♯', 'G', 'A♭', 'A', 'B♭', 'B']

    const arrayOfModes = ['minor', 'major']


    return (
        <div className="mx-10">
            <table className="mx-auto border-collapse m-[50px] xl:text-lg">
                <thead>
                <tr>
                    <th className="min-w-[260px]">Track</th>
                    <th>Tempo</th>
                    <th className="w-10">Time Signature</th>
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