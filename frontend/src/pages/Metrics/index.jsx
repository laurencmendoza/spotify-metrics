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

export default function Metrics() {
    const [topSongsMT, setTopSongsMT] = useState(null);
    const [topSongsST, setTopSongsST] = useState(null);
    const [topSongsLT, setTopSongsLT] = useState(null);
    const [topArtistsMT, setTopArtistsMT] = useState(null);
    const [topArtistsST, setTopArtistsST] = useState(null);
    const [topArtistsLT, setTopArtistsLT] = useState(null);

    async function handleTopSongRequestMT() {
        try {
            const { data } = await getTopSongsMT();
            setTopSongsMT(data);
            console.log(data);
        } catch (err) {
            console.log(err);
        }
    }

    async function handleTopSongRequestST() {
        try {
            const { data } = await getTopSongsST();
            setTopSongsST(data);
            console.log(data);
        } catch (err) {
            console.log(err);
        }
    }

    async function handleTopArtistRequestMT() {
        try {
            const { data } = await getTopArtistsMT();
            setTopArtistsMT(data);
            console.log(data);
        } catch (err) {
            console.log(err);
        }
    }

    async function handleTopArtistRequestMT() {
        try {
            const { data } = await getTopArtistsMT();
            setTopArtistsMT(data);
            console.log(data);
        } catch (err) {
            console.log(err);
        }
    }

    useEffect(() => {
        handleTopSongRequestMT();
        handleTopArtistRequestMT();
    }, []);

    return (
        <div className="flex flex-col">
            <nav className="flex border-[red] border-[1px]">
                <a>All Time</a>
                <a>Last 6 Months</a>
                <a>Last 4 Weeks</a>
            </nav>
            <div className="flex justify-evenly">
                {topSongsMT && <TopSongs topSongs={topSongsMT.items} />}
                {topArtistsMT && <TopArtists topArtists={topArtistsMT.items} />}
            </div>
        </div>
    );
}
