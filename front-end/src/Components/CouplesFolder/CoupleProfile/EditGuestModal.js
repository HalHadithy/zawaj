import { useEffect } from 'react'

const EditGuestModal= ({form, setForm, handleInfoSubmit, currentCouple, setModal}) => {


    const updateInfo = (e) => {
        setForm({
            ...form,
            [e.target.name]: e.target.value
        });
    } 

    
    return (
        <div id="modal-edit-guest-container">
            <div id="modal-edit-guest">
            <button onClick={()=>setModal(state => !state)}>X</button>

                <br/>
                <br/>


                <form action="/action_page.php" onSubmit={handleInfoSubmit}>
                        
                        {/* name */}
                        <label>Name: </label>
                        <input 
                            type="text" 
                            id="edit-name"
                            name="name" 
                            value={form.name}
                            onChange={updateInfo}
                        />

                        <br/>
                        
                        {/* email */}
                        <label>Email: </label>
                        <input 
                            type="text" 
                            id="edit-email" 
                            name="email" 
                            value={form.email}
                            onChange={updateInfo}
                        />

                        <br/>

                        {/* address*/}
                        <label>Address: </label>
                        <input 
                            type="text" 
                            id="edit-address" 
                            name="address" 
                            value={form.address}
                            onChange={updateInfo}
                        />

                        <br/>

                        {/* Guest type / Wedding Partu*/}
                        <label>Guest Type: </label>
                        <select 
                            id="edit-party" 
                            name="party" 
                            value={form.party}
                            onChange={updateInfo}
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
                            value={form.party_member}
                            onChange={updateInfo}
                        />
                        
                        <br/>

                        {/* Side of The Isle */}
                        <label>Side of The Isle: </label>
                        <select 
                            id="edit-side_of_isle" 
                            name="side_of_isle" 
                            value={form.side_of_isle}
                            onChange={updateInfo}
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
                            value={form.plus_1}
                            onChange={updateInfo}
                        >
                            <option value="true">allowed</option>
                            <option value="false">not allowed</option>
                        </select>

                        <br/>

                        {/* rsvpd */}
                        <label>RSVP Status: </label>
                        <select 
                            id="edit-rsvpd" 
                            name="rsvpd" 
                            onChange={updateInfo}
                        >
                            <option value="true">Has RSVP'd</option>
                            <option value="false">Has Not RSVP'd</option>
                        </select>

                        <br/>

                        {/* attending */}
                        <label>Attending: </label>
                        <select 
                            id="edit-rsvpd" 
                            name="attending" 
                            onChange={updateInfo}
                        >
                            <option value="true">attending</option>
                            <option value="false">not attending</option>
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
    )
  }
  
  export default EditGuestModal;

