export default function PlaylistTracks({tracks}) {
    return (
        <div>
            <h3>tracks</h3>
            {tracks.map((t, idx)=> (
                <p>{t.track.name}</p>
            ))}

        </div>
    )
}