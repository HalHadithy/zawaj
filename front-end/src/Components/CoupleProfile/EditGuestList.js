import { useEffect, useState } from 'react'
import ProfileNavBar from './ProfileNavBar'
import EditGuest from './EditGuest'

const EditGuestList= ({currentCouple, guestList}) => {

    const body = guestList.map((guest)=><EditGuest key={guest.id} guest={guest} currentCouple={currentCouple}/>)

    const [newGuestForm, setNewGuestForm] = useState({ 
            name: "", 
            email: "", 
            address: "", 
            plus_1: "", 
            side_of_isle: "", 
            party: false, 
            party_member: "",
            couple_id: currentCouple.id,
            invitation_id: 1
        })
    // const [address, setAddress] = useState("")
    // setAddress(newGuestForm.address)
    console.log(newGuestForm)
    // console.log(address)


    const updateNewGuestInfo = (e) => {
        setNewGuestForm({
            ...newGuestForm,
            [e.target.name]: e.target.value
        });
    }
    
    // useEffect(() =>{
    //     console.log(address)
    //     fetch("http://localhost:4020/find_by_address"), {
    //         headers: {
    //             "Content-Type": "application/json"
    //         },
    //         body: JSON.stringify(address)
    //     }
    //     .then((r) => r.json())
    //     .then((data) => {
    //         console.log(data)
    //         setNewGuestForm({
    //             ...newGuestForm,
    //             [address]: data.id
    //         });
    //     })
    //   },[address])      
     

    const handleCreateGuest = (e) => {
        e.preventDefault()
        fetch("http://localhost:4020/guests", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify( newGuestForm ),
        })
    }
    


    return (
        <div className="profile-div">
            <ProfileNavBar/>
            <div className="profile-right">
                <table>
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Address</th>
                            <th>Guest Type</th>
                            <th>Party Member</th>
                            <th>Side of The Isle</th>
                            <th>Plus One</th>
                            <th>RSVP Status</th>
                            <th>Attending?</th>

                        </tr>
                    </thead>
                    <tbody>
                        {body}
                    </tbody>
                </table>
                <div>
                <h2>Add A Guest</h2>
                <form onSubmit={handleCreateGuest}>
                        
                        {/* name */}
                        <label>Name: </label>
                        <input 
                            type="text" 
                            id="edit-name"
                            name="name" 
                            value={newGuestForm.name}
                            onChange={updateNewGuestInfo}
                        />

                        <br/>
                        
                        {/* email */}
                        <label>Email: </label>
                        <input 
                            type="text" 
                            id="edit-email" 
                            name="email" 
                            value={newGuestForm.email}
                            onChange={updateNewGuestInfo}
                        />

                        <br/>

                        {/* address*/}
                        <label>Address: </label>
                        <input 
                            type="text" 
                            id="edit-address" 
                            name="address" 
                            value={newGuestForm.address}
                            onChange={updateNewGuestInfo}
                        />

                        <br/>

                        {/* Guest type / Wedding Partu*/}
                        <label>Guest Type: </label>
                        <select 
                            id="edit-party" 
                            name="party" 
                            value={newGuestForm.party}
                            onChange={updateNewGuestInfo}
                        >
                            <option value="true"> wedding party member</option>
                            <option value="false"> guest</option>
                        </select>

                        <br/>

                        {/* Party member*/}
                        <label>Wedding Party Member: </label>
                        <input 
                            type="text" 
                            id="edit-party_member"
                            name="party_member" 
                            value={newGuestForm.party_member}
                            onChange={updateNewGuestInfo}
                        />
                        
                        <br/>

                        {/* Side of The Isle */}
                        <label>Side of The Isle: </label>
                        <select 
                            id="edit-side_of_isle" 
                            name="side_of_isle" 
                            value={newGuestForm.side_of_isle}
                            onChange={updateNewGuestInfo}
                        >
                            <option value="nearlywed_1"> {currentCouple.nearlywed_1_first} </option>
                            <option value="nearlywed_2"> {currentCouple.nearlywed_2_first} </option>
                            <option value="both"> both</option>
                        </select>

                        <br/>
                        
                        {/* Plus One */}
                        <label>Plus One: </label>
                        <select 
                            id="edit-plus_1" 
                            name="plus_1" 
                            value={newGuestForm.plus_1}
                            onChange={updateNewGuestInfo}
                        >
                            <option value="true">allowed</option>
                            <option value="false">not allowed</option>
                        </select>


                        <br/>
                        <br/>


                        <input 
                            type="submit" 
                            value="Submit"
                        />
                    </form>
                    
                </div>

                
            </div>
        </div>
    )
  }
  
  export default EditGuestList;