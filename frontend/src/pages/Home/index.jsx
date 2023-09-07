import { getCurrentUserProfile } from '../../spotify'
import { useState, useEffect } from 'react'

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
        <div className="
        text-center
        h-full">
        <h1 className="
        text-[2.25rem] 
        font-bold
        p-[2rem]">
            Spotify Metrics
        </h1>

        {profile && (
            <div>
                {profile.images[1] ? 
                (<img className="
                inline
                mx-auto 
                my-8 
                rounded-full 
                h-[200px]
                " 
                src={profile.images[1].url} alt={profile.display_name}/>)
                : 
                (<img className="
                inline
                mx-auto 
                my-0 
                rounded-full 
                h-[75px]" 
                src={profile.images[0].url} alt={profile.display_name}/>
                )}
            <h1 className="
                text-[2rem]
                font-bold
                p-[2rem]">
                {profile.display_name} </h1>
            </div>
        ) }
        </div>
    )
}