import './Home.css'
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
        <div className="home">
        <h1>
            Spotify Metrics
        </h1>

        {profile && (
            <div>
            <img className="profile-img" src={profile.images[0].url}/>
            <h1> {profile.display_name} </h1>
            </div>
        ) }
        </div>
    )
}