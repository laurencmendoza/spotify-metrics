import { getAudioAnalysis } from "../../../spotify"
import { useState, useEffect } from 'react'
import Spinner from "../../../components/Loader/Spinner";

export default function PlaylistAudioAnalysis({trackId}) {
    const [audioAnalysis, setAudioAnalysis] = useState(null);
    async function handleAnalysisRequest() {
        try {
            const {data} = await getAudioAnalysis(trackId);
            setAudioAnalysis(data)
        } catch(err) {
            console.log(err)
        }
    }

    useEffect(()=> {
        handleAnalysisRequest();
    }, [])

    const arrayOfKeys = ['C', 'C♯', 'D', 'E♭', 'E', 'F', 'F♯', 'G', 'A♭', 'A', 'B♭', 'B']

    const arrayOfModes = ['minor', 'major']

    return (
        <>
        {audioAnalysis ? (
        <>
        <td>{Math.round(audioAnalysis.track.tempo)}</td>
        <td>{audioAnalysis.track.time_signature}</td>
        <td>{audioAnalysis.bars.length}</td>
        <td>{audioAnalysis.track.key>-1 ? (arrayOfKeys[audioAnalysis.track.key]) : ("no key detected")}</td>
        <td>{arrayOfModes[audioAnalysis.track.mode]}</td>
        <td>{audioAnalysis.track.loudness} dB</td>
        </>
        ) :
        (
        <>
        <td colSpan="6" className="text-center"> <Spinner/> </td>
        </>
        )}
        </>
    )
}