import { getCurrentUserProfile } from '../../spotify'
import { useState, useEffect } from 'react'
import spotifyLogo from '../../spotify-icons/Spotify_Logo_RGB_White.png'

export default function Home() {
    const [profile, setProfile] = useState(null);

    async function handleProfileRequest() {
        try {
            const {data} = await getCurrentUserProfile();
            setProfile(data)
        } catch (err) {
            console.log(err)
        }
        
    }

    useEffect(() => {
        handleProfileRequest();
    }, [])


    return (
        <div className="h-full">
            <div className="flex justify-center my-10">
                <img className="h-[4rem]" src={spotifyLogo} alt="white Spotify logo"/>
                <h1 className="text-[2.5rem] text-white">
                    <span className="px-2 font-light">|</span> 
                    Metrics
                </h1>
            </div>

        {profile && (
            <div className="text-center">
                {profile.images[1] ? 
                (<img className="inline mx-auto my-4 rounded-full h-[200px]" 
                    src={profile.images[1].url} 
                    alt={profile.display_name}/>)
                : 
                (<img className="inline mx-auto my-0 rounded-full h-[75px]" 
                    src={profile.images[0].url} 
                    alt={profile.display_name}/>
                )}
                
                <h1 className="text-[2.25rem] font-bold p-[2rem] mb-10">
                    {profile.display_name} 
                </h1>
            </div>
            )}

            <div className="bg-white-smoke text-[black] min-h-[80vh] mx-auto">
                <h1 className="text-2xl font-bold pt-10 pb-4 text-center px-4">View Spotify's audio analytics for the tracks in your saved playlists</h1>
                <div className="mx-auto max-w-[600px] px-8">
                <p className="text-xl my-4"> <span className="font-bold">Metrics</span> allows you to view the following audio features:  </p>
                <ul className="text-left text-lg">
                    <li>1. Tempo: The overall estimated tempo of a track in beats per minute (BPM).</li>
                    <li>2. Time signature: The estimated time signature, which is a notational convention to specify how many beats are in each bar or measure.</li>
                    <li>3. Bars: A segment of music that holds a given number of beats. A bar is a unit of time for a piece of music. </li>
                    <li>4. Key: The estimated overall key of the track.</li>
                    <li>5. Mode</li>
                    <li>6. Loudness </li>
                </ul>
                </div>
{/* Beats Per Minute (BPM) - The tempo of the song.
Energy - The energy of a song - the higher the value, the more energtic. song
Danceability - The higher the value, the easier it is to dance to this song.
Loudness - The higher the value, the louder the song.
Valence - The higher the value, the more positive mood for the song.
Length - The duration of the song.
Acoustic - The higher the value the more acoustic the song is.
Popularity - The higher the value the more popular the song is.
A.Sep - maximizes the artist separation in the set
Rnd - A randon number. Sort by this column to shuffle your playlist.</p> */}
            </div>
            
        
        </div>
    )
}