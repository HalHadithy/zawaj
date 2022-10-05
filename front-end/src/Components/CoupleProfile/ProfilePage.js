import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import ProfileNavBar from "./ProfileNavBar";
import GuestListTable from "./GuestListTable";


const ProfilePage = ( {currentCouple} ) => {
    const navigate = useNavigate();
    const [couple, setCouple] = useState({})

    console.log(currentCouple)


    //fetch wedding party, there should be a route in backend just for wedding party
     

    return (
        <div className="profile-div">
            <ProfileNavBar/>
            <div className="profile-right">
                <h2>{ `${currentCouple.nearlywed_1_first} & ${currentCouple.nearlywed_2_first}'s Wedding Profile`}</h2>
                <div>
                    <button onClick={()=>navigate('/edit-info')}>Edit</button>
                    <ul>
                        <li>Username: {currentCouple.username}</li>
                        <li>Primary Email Address: {currentCouple.email}</li>
                        <li>Nearlywed Name: {currentCouple.nearlywed_1_first + " " + currentCouple.nearlywed_1_last}</li>
                        <li>Nearlywed Name: {currentCouple.nearlywed_2_first + " " + currentCouple.nearlywed_2_last}</li>
                        <li>Your Story: </li>
                        <li>{currentCouple.our_story}</li>
                        <li>Images: {currentCouple.photo_url}</li>
                    </ul>
                    <div>
                    {currentCouple.photo_url 
                        ? 
                        <img src={currentCouple.photo_url} alt='Your Best Memories' key ={currentCouple.photo_url}/>
                        : "no photos"
                    }
                    </div>
              
                </div>

                <div>
                    <button onClick={()=>navigate('/edit-guest-list')}>Edit</button>
                    <h2>Guest Information</h2>
                    <GuestListTable/>

                </div>

                <div>
                    <h2>Event Information</h2>
                    <dl>
                        <dt>Venue: {currentCouple.venue_name}</dt>
                        <dt>Venue Address: {currentCouple.venue_location}</dt>
                        {/* https://developers.google.com/maps/documentation/javascript/react-map */}
                    </dl>

                </div>

                <div >
                    <button onClick={()=>navigate('/edit-info')}>Edit</button>
                    <h2>Orders</h2>
                    <dl>
                        <dt>Invitations: {currentCouple.invitation ? currentCouple.invitation_style : "no invitation"}</dt>
                        <dt>Wedding Website: {currentCouple.website ? currentCouple.website_style : "no website"}</dt>
                    </dl>
                </div>

                
            </div>
           
            
        </div>
    )
  }
  
  export default ProfilePage;
  