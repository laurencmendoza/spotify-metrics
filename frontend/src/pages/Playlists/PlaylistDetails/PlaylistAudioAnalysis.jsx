import { getAudioAnalysis } from "../../../spotify"
import { useState, useEffect } from 'react'

export default function PlaylistAudioAnalysis({trackId}) {
    const [audioAnalysis, setAudioAnalysis] = useState(null);
    async function handleAnalysisRequest() {
        try {
            const {data} = await getAudioAnalysis(trackId);
            setAudioAnalysis(data)
            console.log(data)
        } catch(err) {
            console.log(err)
        }
    }

    useEffect(()=> {
        handleAnalysisRequest();
    }, [])

    const arrayOfKeys = ['C', 'C#', '']

    const arrayOfModes = ['minor', 'major']

    return (
        <>
        {audioAnalysis && (
        <>
        <td>{Math.round(audioAnalysis.track.tempo)}</td>
        <td>{audioAnalysis.track.time_signature}</td>
        <td>{audioAnalysis.bars.length}</td>
        <td>{audioAnalysis.track.key}</td>
        <td>{arrayOfModes[audioAnalysis.track.mode]}</td>
        <td>{audioAnalysis.track.loudness} dB</td>
        </>
        )}
        </>
    )
}