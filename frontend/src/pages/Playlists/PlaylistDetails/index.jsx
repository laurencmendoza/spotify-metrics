import { getPlaylistTracks } from "../../../spotify"
import { useState, useEffect } from 'react'
import { useParams } from "react-router";
import PlaylistTracks from "./PlaylistTracks";

export default function PlaylistDetails() {
    const [playlistTracks, setPlaylistTracks] = useState(null);
    const { id } = useParams();
    async function handleTrackRequest() {
        try {
            const {data} = await getPlaylistTracks(id);
            setPlaylistTracks(data)
            console.log(data)
        } catch (err) {
            console.log(err)
        }
    }

    useEffect(()=> {
        handleTrackRequest();
    }, [])

    return (
        <div className="xl:text-lg">
            {playlistTracks && (
                <PlaylistTracks tracks={playlistTracks.items}/>
            )}
        </div>
    )
}

