import { useState } from "react";
import { useNavigate } from "react-router-dom";
import ProfileNavBar from "./ProfileNavBar";
import GuestListTable from "./GuestListTable";


const ProfilePage = (  ) => {
    const navigate = useNavigate();

    // const [imageURLArray, setImageURLArray] = useState([])

    // fetch images for this couple, setImageURLArray()
    const imageURLArray = [
        'https://www.mannasunevents.com/wp-content/uploads/2019/07/Stella_Yang_Photography_Paris_proposal__82_of_112.jpg',
        'https://www.mannasunevents.com/wp-content/uploads/2019/07/Stella_Yang_Photography_Paris_proposal__80_of_112.jpg',
        'https://www.mannasunevents.com/wp-content/uploads/2019/07/Stella_Yang_Photography_Paris_proposal__60_of_112-1.jpg'
    ]

    //fetch guestlist

    //fetch wedding party, there should be a route in backend just for wedding party
     

    return (
        <div className="profile-div">
            <ProfileNavBar/>
            <div className="profile-right">
                <h2>{ `Frank & Lisa's Wedding Profile` /*`${nearlywedName1} & ${nearlywedName2}'s Wedding Profile`*/}</h2>
                <div>
                    <button onClick={()=>navigate('/edit-info')}>Edit</button>
                    <ul>
                        <li>Username: {}</li>
                        <li>Email address:</li>
                        <li>Nearlywed Name:</li>
                        <li>Nearlywed Name:</li>
                        <li>Your Story:</li>
                        <li>Images:</li>
                    </ul>
                    <div>
                        {imageURLArray.map((imageURL)=>{return(<img src={imageURL} alt='Your Best Memories' key ={imageURL}/>)})}
                    </div>
              
                </div>

                <div onClick={()=>navigate('/edit-guest-list')}>
                    <button >Edit</button>
                    <GuestListTable/>

                </div>

                <div onClick={()=>navigate('/edit-info')}>
                    <button>Edit</button>
                    <h2>{ `Orders` /*`${nearlywedName1} & ${nearlywedName2}'s Wedding Profile`*/}</h2>
                    <dl>
                        <dt>Invitations: {}</dt>
                        <dd>Style:</dd>
                        <dt>Wedding Website:</dt>
                        <dd>Style:</dd>
                    </dl>
                </div>

                <div>
                </div>
            </div>
           
            
        </div>
    )
  }
  
  export default ProfilePage;
  