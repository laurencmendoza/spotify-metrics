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
            <nav className="flex justify-end text-xl mt-10">
                <Link to="/metrics/long_term" className="hover:underline">All Time</Link>
                <Link to="/metrics/medium_term" className="hover:underline px-10">Last 6 Months</Link>
                <Link to="/metrics/short_term" className="hover:underline pr-10">Last 4 Weeks</Link>
            </nav>
            <div className="flex flex-col lg:flex-row justify-evenly mt-6">
                {topSongsMT && timeRange.id==="medium_term" && <TopSongs topSongs={topSongsMT.items} timeRange="Last 6 Months"/>}
                {topSongsST && timeRange.id==="short_term" && <TopSongs topSongs={topSongsST.items} timeRange="Last 4 Weeks"/>}
                {topSongsLT && timeRange.id==="long_term" && <TopSongs topSongs={topSongsLT.items} timeRange="All Time"/>}
                {topArtistsMT && timeRange.id==="medium_term" && <TopArtists topArtists={topArtistsMT.items} timeRange="Last 6 Months"/>}
                {topArtistsST && timeRange.id==="short_term" && <TopArtists topArtists={topArtistsST.items} timeRange="Last 4 Weeks"/>}
                {topArtistsLT && timeRange.id==="long_term" && <TopArtists topArtists={topArtistsLT.items} timeRange="All Time"/>}
            </div>
        </div>
    );
}
