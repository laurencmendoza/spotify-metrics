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
        <div className="text-center h-full">
            <div className="flex justify-center my-10">
                <img className="h-[4rem]" src={spotifyLogo} alt="white Spotify logo"/>
                <h1 className="text-[2.5rem] text-white">
                    <span className="px-2 font-light">|</span> 
                    Metrics
                </h1>
            </div>

        {profile && (
            <div>
                {profile.images[1] ? 
                (<img className="inline mx-auto my-4 rounded-full h-[200px]" 
                    src={profile.images[1].url} 
                    alt={profile.display_name}/>)
                : 
                (<img className="inline mx-auto my-0 rounded-full h-[75px]" 
                    src={profile.images[0].url} 
                    alt={profile.display_name}/>
                )}
                
                <h1 className="text-[2.25rem] font-bold p-[2rem]">
                    {profile.display_name} 
                </h1>
            </div>
        ) }
        </div>
    )
}