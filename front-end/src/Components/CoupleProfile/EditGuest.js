import { useState } from 'react'
import EditGuestModal from './EditGuestModal'

const EditGuest= ({guest, currentCouple}) => {
    const [modal, setModal] = useState(false)

    const [form, setForm] = useState({ 
            name: guest.name, 
            email:guest.email, 
            address: guest.address, 
            rsvpd: guest.rsvpd, 
            attending: guest.attending, 
            plus_1: guest.plus_1, 
            side_of_isle: guest.side_of_isle, 
            party: guest.party, 
            party_member: guest.party_member
        })

    const handleInfoSubmit =(e)=>{
        e.preventDefault()
        let token = localStorage.getItem("jwt"); 
        fetch(`http://localhost:4020/guests/${guest.id}`, {
            method: 'PATCH',
            headers: {
                token: token,
                "Content-Type": "application/json",
            },
            body: JSON.stringify(form)
        })
        .then((res) => res.json())
        .then((data) => {
        //     setForm({ 
        //     name: data.name, 
        //     email: data.email, 
        //     address: data.address, 
        //     rsvpd: data.rsvpd, 
        //     attending: data.attending, 
        //     plus_1: data.plus_1, 
        //     side_of_isle: data.side_of_isle, 
        //     party: data.party, 
        //     party_member: data.party_member
        // })
    })
    }
    
    return (
        <>
        
        <tr onClick={()=>setModal(true)}>
            <td>{guest.name}</td>
            <td>{guest.email}</td>
            <td>{guest.address}</td>
            <td>{guest.party ? "wedding party member" : "guest"}</td>
            <td>{guest.party ? guest.party_member : " " }</td>
            <td>{guest.side_of_isle}</td>
            <td>{guest.plus_1? "allowed" : "not allowed"}</td>
            {/* {guest.plus_1? <td>{guest.plus_1_attending?"bringing a +1":"not bringing a +1"}</td> : null} */}
            <td>{guest.rsvpd? "yes":"not yet"}</td>
            <td>{guest.attending? "attending":"not attending"}</td>
        </tr>
            {modal ?
                <EditGuestModal form={form} setForm={setForm} handleInfoSubmit={handleInfoSubmit} currentCouple={currentCouple} setModal={setModal} />
            :
            null
            }
        </>
    )
  }
  
  export default EditGuest;

