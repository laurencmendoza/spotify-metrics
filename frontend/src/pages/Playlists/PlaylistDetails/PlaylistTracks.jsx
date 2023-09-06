export default function PlaylistTracks({tracks}) {
    return (
        <div className="playlist-tracks">
            
            <table>
                <thead>
                <tr>
                    <th>Track</th>
                    <th>Tempo</th>
                    <th>Time Signature</th>
                    <th>Key</th>
                    <th>Loudness</th>
                </tr>
                </thead>
                <tbody>
                {tracks.map((t, idx)=> (
                    <tr>
                        <td className="p-track">
                            <span className="p-track-name">
                            {t.track.name} 
                            </span>
                        <p className="p-track-artist-album">
                            <span>
                            {t.track.artists[0].name}
                            </span> 
                            <span>
                            {t.track.album.name}
                            </span>
                        </p>
                        </td>
                        <td>tempo</td>
                        <td>time signature</td>
                        <td>key</td>
                        <td>loudness</td>
                    </tr>
                ))}
                </tbody>
                
            </table>
        </div>
    )
}