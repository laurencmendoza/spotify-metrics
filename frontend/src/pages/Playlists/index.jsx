import './Playlists.css'
import { getMyPlaylists } from '../../spotify'
import { useState, useEffect } from 'react'
import Playlist from './Playlist'
import Loading from '../../components/Loader/Loading'

export default function Playlists() {
    const [playlists, setPlaylists] = useState(null)
    
    async function handlePlaylistRequest() {
        try {
            const {data} = await getMyPlaylists()
            setPlaylists(data)
        } catch (err) {
            console.log(err)
        }
    }

    useEffect(()=> {
        handlePlaylistRequest()
    }, [])

    return (

        <div className="sm:m-[3rem] text-center">
            <h1 className="sm:text-left text-[2rem] font-bold mb-4 mt-8">Your Playlists</h1>
        {playlists ? (
            <Playlist playlists={playlists}/>
        ) : (<Loading/>)}
        </div>
    )
}