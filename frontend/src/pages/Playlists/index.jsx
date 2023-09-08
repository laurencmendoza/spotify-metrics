import './Playlists.css'
import { getPlaylists } from '../../spotify'
import { useState, useEffect } from 'react'
import Playlist from './Playlist';

export default function Playlists() {
    const [playlists, setPlaylists] = useState(null);
    
    async function handlePlaylistRequest() {
        try {
            const {data} = await getPlaylists();
            setPlaylists(data)
            console.log(data)
        } catch (err) {
            console.log(err)
        }
    }

    useEffect(()=> {
        handlePlaylistRequest();
    }, [])

    return (

        <div className="m-[3rem]">
            <h1 className="text-[2rem] font-bold mb-4 mt-8">Your Playlists</h1>
        {playlists && (
            <Playlist playlists={playlists}/>
        )}
        </div>
    )
}