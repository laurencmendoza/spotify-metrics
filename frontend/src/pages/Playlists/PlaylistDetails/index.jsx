import { getPlaylistTracks, getPlaylist } from "../../../spotify"
import { useState, useEffect } from 'react'
import { useParams } from "react-router";
import PlaylistTracks from "./PlaylistTracks";
import Loading from "../../../components/Spinner/Spinner";


export default function PlaylistDetails() {
    const [playlist, setPlaylist] = useState(null);
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

    async function handlePlaylistRequest() {
        try {
            const {data} = await getPlaylist(id);
            setPlaylist(data)
            console.log(data)
        } catch (err) {
            console.log(err)
        }
    }

    useEffect(()=> {
        handleTrackRequest();
        handlePlaylistRequest();
    }, [])

    return (
        <div className="2xl:flex 2xl:justify-center">
            <div className="my-10 sm:m-10">
            {playlist ? (
                playlist.images[0] ? (<img className="h-[240px] mx-auto sm:mx-0" src={playlist.images[0].url} alt={playlist.name}/>) 
                : (<img className="h-[240px] mx-auto sm:mx-0 bg-[white]" src="https://cdnweb.anghami.com/web/assets/img/placeholders/playlist-placeholder.png"/>)
            ) : (
                <Loading/>
            )}
            
                <div className="m-10">
                    {playlist && (
                    <>
                    <h1 className="text-center mx-10 mb-10 text-[1.5rem] sm:text-[1.75rem] font-bold">{playlist.name}</h1>
                    <a href={playlist.external_urls.spotify} target="_blank">
                    <button className="block mx-auto text-[white] font-bold bg-spotify-green rounded-3xl h-[3rem] py-0 px-[24px] divide-none hover:scale-[1.02]">
                        LISTEN ON SPOTIFY
                    </button>
                    </a>
                    </>
                    )}
                    
                </div>
            </div>
            {playlistTracks &&
                <PlaylistTracks tracks={playlistTracks.items}/>}
        </div>
    )
}

