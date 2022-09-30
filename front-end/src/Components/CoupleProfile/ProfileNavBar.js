
import { useNavigate } from "react-router-dom";

const ProfileNavBar= () => {
    const navigate = useNavigate();


    return (
        <div className="profile-left">
            <div>
                <ul>
                    <li onClick={()=>navigate('/profile-page')}>Profile</li>
                    <li onClick={()=>navigate('/edit-info')}>Edit Your Information</li>
                    <li onClick={()=>navigate('/rsvp-summary')}>RSVP Summary</li>
                    <li onClick={()=>navigate('')}>Choose Website</li>
                    <li onClick={()=>navigate('')}>Choose Invitation</li>
                    <li onClick={()=>navigate('/edit-guest-list')}>Edit Guestlist</li>
                </ul>
                
            </div>
        </div>
    )
  }
  
  export default ProfileNavBar;
 