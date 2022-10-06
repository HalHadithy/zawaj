import { useEffect, useState } from 'react'
import GuestListCard from './GuestListCard'

const GuestListTable= () => {
    const [guestList, setGuestList] = useState([])
   
    useEffect(() =>{
        let token = localStorage.getItem("jwt");
        console.log(token)
        fetch(`http://localhost:4020/guests_couple`, {
            headers: {
                token: token,
                "Content-Type": "application/json",
            },
        })
        .then((res) => res.json())
        .then((guests) => {
            console.log(guests)
            setGuestList(guests)
        });
        
      },[]) 

      
        

    return (
        <div>
            
            <table id="profile-page-table">
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Address</th>
                        <th>Plus One</th>
                        <th>RSVP Status</th>
                    </tr>
                </thead>
                <tbody>
                    {guestList.map((guest)=><GuestListCard key={guest.id} guest={guest}/>)}
                </tbody>
            </table>
        </div>
    )
  }
  
  export default GuestListTable;