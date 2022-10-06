import { useNavigate } from "react-router-dom";
import ProfileNavBar from "./ProfileNavBar";
import GuestListTable from "./GuestListTable";


const ProfilePage = ( {currentCouple} ) => {
    const navigate = useNavigate();

    return (
        <div className="profile-div">
            <ProfileNavBar/>
            <div className="profile-right">
                <h2>{ `${currentCouple.nearlywed_1_first} & ${currentCouple.nearlywed_2_first}'s Wedding Profile`}</h2>
                <div>
                    <button onClick={()=>navigate('/edit-info')}>Edit</button>
                        <p><strong>Username:</strong> {currentCouple.username}</p>
                        <p><strong>Primary Email Address:</strong>   {currentCouple.email}</p>
                        <p><strong>Nearlywed Name:</strong>   {currentCouple.nearlywed_1_first + " " + currentCouple.nearlywed_1_last}</p>
                        <p><strong>Nearlywed Name:</strong>   {currentCouple.nearlywed_2_first + " " + currentCouple.nearlywed_2_last}</p>
                        <p><strong>Your Story:</strong></p>
                        <p>{currentCouple.our_story}</p>
                        <p><strong>Images:</strong></p>
                    {currentCouple.photo_url 
                        ? 
                        // <p>{image_url}</p>
                        <img src={currentCouple.photo_url} alt='Your Best Memories' key ={currentCouple.photo_url}/>
                        : "no photos"
                    }
              
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
  