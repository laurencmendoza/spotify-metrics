import './Metrics.css'
import { getTopArtists, getTopSongs } from '../../spotify'
import { useState, useEffect } from 'react'
import TopSongs from './TopSongs';
import TopArtists from './TopArtists';

export default function Metrics() {
    const [topSongs, setTopSongs] = useState(null);
    const [topArtists, setTopArtists] = useState(null);

    async function handleTopSongRequest() {
        try {
            const {data} = await getTopSongs();
            setTopSongs(data)
            console.log(data)
        } catch (err) {
            console.log(err)
        }
    }

    async function handleTopArtistRequest() {
        try {
            const {data} = await getTopArtists();
            setTopArtists(data)
            console.log(data)
        } catch (err) {
            console.log(err)
        }
    }

    useEffect(()=> {
        handleTopSongRequest();
        handleTopArtistRequest();
    }, [])


    return (
        <div className="metrics">
        {topSongs && (
            <TopSongs topSongs={topSongs.items}/>
        )}
        {topArtists && (
            <TopArtists topArtists={topArtists.items}/>
        )}
        </div>
    )
}