import {
    getTopArtistsMT,
    getTopSongsMT,
    getTopArtistsST,
    getTopSongsST,
    getTopArtistsLT,
    getTopSongsLT,
} from "../../spotify";
import { useState, useEffect } from "react";
import TopSongs from "./TopSongs";
import TopArtists from "./TopArtists";
import { Link, useParams } from 'react-router-dom'

export default function Metrics() {
    const [topSongsMT, setTopSongsMT] = useState(null);
    const [topSongsST, setTopSongsST] = useState(null);
    const [topSongsLT, setTopSongsLT] = useState(null);
    const [topArtistsMT, setTopArtistsMT] = useState(null);
    const [topArtistsST, setTopArtistsST] = useState(null);
    const [topArtistsLT, setTopArtistsLT] = useState(null);
    const timeRange = useParams();
    console.log(timeRange.id)

    async function handleTopSongRequestMT() {
        try {
            const { data } = await getTopSongsMT();
            setTopSongsMT(data);
        } catch (err) {
            console.log(err);
        }
    }

    async function handleTopSongRequestST() {
        try {
            const { data } = await getTopSongsST();
            setTopSongsST(data);
        } catch (err) {
            console.log(err);
        }
    }

    async function handleTopSongRequestLT() {
        try {
            const { data } = await getTopSongsLT();
            setTopSongsLT(data);
        } catch (err) {
            console.log(err);
        }
    }


    async function handleTopArtistRequestMT() {
        try {
            const { data } = await getTopArtistsMT();
            setTopArtistsMT(data);
        } catch (err) {
            console.log(err);
        }
    }

    async function handleTopArtistRequestST() {
        try {
            const { data } = await getTopArtistsST();
            setTopArtistsST(data);
        } catch (err) {
            console.log(err);
        }
    }

    async function handleTopArtistRequestLT() {
        try {
            const { data } = await getTopArtistsLT();
            setTopArtistsLT(data);
        } catch (err) {
            console.log(err);
        }
    }


    useEffect(() => {
        handleTopSongRequestMT();
        handleTopSongRequestST();
        handleTopSongRequestLT();
        handleTopArtistRequestMT();
        handleTopArtistRequestST();
        handleTopArtistRequestLT();
    }, []);

    return (
        <div className="flex flex-col">
            <nav className="flex border-[red] border-[1px] justify-end">
                <Link to="/metrics/long_term">All Time</Link>
                <Link to="/metrics/medium_term" className="px-10">Last 6 Months</Link>
                <Link to="/metrics/short_term" className="pr-10">Last 4 Weeks</Link>
            </nav>
            <div className="flex justify-evenly">

                {topSongsMT && timeRange.id==="medium_term" && <TopSongs topSongs={topSongsMT.items} />}
                {topSongsST && timeRange.id==="short_term" && <TopSongs topSongs={topSongsST.items} />}
                {topSongsLT && timeRange.id==="long_term" && <TopSongs topSongs={topSongsLT.items} />}
                {topArtistsMT && timeRange.id==="medium_term" && <TopArtists topArtists={topArtistsMT.items} />}
                {topArtistsST && timeRange.id==="short_term" && <TopArtists topArtists={topArtistsST.items} />}
                {topArtistsLT && timeRange.id==="long_term" && <TopArtists topArtists={topArtistsLT.items} />}
            </div>
        </div>
    );
}
