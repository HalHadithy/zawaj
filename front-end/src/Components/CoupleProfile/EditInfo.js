import { useEffect, useState } from 'react'
import ProfileNavBar from './ProfileNavBar'


const EditInfo= ({setCurrentCouple}) => {

    const [couple, setCouple] = useState({})
    let couple_id = couple.id
    let couple_photo = couple.photo_url

    // console.log(couple_id)
    console.log(couple)

    const [picData, setPicData] = useState("")
    const [form, setForm] = useState({ 
            email:"", 
            username:"", 
            nearlywed_1_first: "", 
            nearlywed_1_last: "", 
            nearlywed_2_first: "", 
            nearlywed_2_last: "", 
            our_story: "", 
            venue_name: "", 
            venue_location: "", 
            invitation: true, 
            invitation_style: "", 
            website: true, 
            website_style: ""
        })
    
    useEffect(() =>{
        let token = localStorage.getItem("jwt");
        fetch(`http://localhost:4020/current_couple`, {
            headers: {
                token: token,
                "Content-Type": "application/json",
            },
        })
        .then((res) => res.json())
        .then((couple) => {
            setForm(
                {
                    email: couple.email, 
                    username: couple.username, 
                    nearlywed_1_first: couple.nearlywed_1_first,
                    nearlywed_1_last: couple.nearlywed_1_last,
                    nearlywed_2_first: couple.nearlywed_2_first, 
                    nearlywed_2_last: couple.nearlywed_2_last, 
                    our_story: couple.our_story,
                    venue_name: couple.venue_name, 
                    venue_location: couple.venue_location, 
                    invitation: couple.invitation,
                    invitation_style: couple.invitation_style,
                    website: couple.website,
                    website_style: couple.website_style
                })
                setCouple(couple)
        });
    },[]) 
    
    
    const updateCheckbox =(e)=>{
        setForm({
            ...form,
            [e.target.name]: !e.target.value
        });   
    }

    const updateInfo = (e) => {
        setForm({
            ...form,
            [e.target.name]: e.target.value
            });
    }

    const handleInfoSubmit =(e)=>{
        e.preventDefault()
        let token = localStorage.getItem("jwt");
        fetch(`http://localhost:4020/couples_edit`, {
            method: 'PATCH',
            headers: {
                token: token,
                "Content-Type": "application/json",
            },
            body: JSON.stringify(form)
        })
        .then((res) => res.json())
        .then((data) => {{
            setCurrentCouple(data)
            setCouple(data)
        }})
    }

    const createPics = (e) => {
        e.preventDefault()
        const formData = new FormData();
        formData.append('photo', picData)
        formData.append('id', couple_id)

        fetch(`http://localhost:4020/change_photo`, {
          method: 'PATCH',
          body: formData
        })
    }


    return (
        <div className="profile-div">
            <ProfileNavBar/>
            <div className="profile-right">
                <h2>Edit your information</h2>
                <form action="/action_page.php" onSubmit={handleInfoSubmit}>
                    {/* username */}
                    <label>Username: </label>
                    <input 
                        type="text" 
                        id="edit-username"
                        name="username" 
                        value={form.username}
                        onChange={updateInfo}
                    />
                    <br/>
                    {/* email */}
                    <label>Primary Email: </label>
                    <input 
                        type="text" 
                        id="edit-email" 
                        name="email" 
                        value={form.email}
                        onChange={updateInfo}
                    />
                    <br/>
                    {/* nearlywed 1 */}
                    <label>Nearlywed First Name: </label>
                    <input 
                        type="text" 
                        id="edit-nearlywed_1_first" 
                        name="nearlywed_1_first" 
                        value={form.nearlywed_1_first}
                        onChange={updateInfo}
                    />
                     <label>Last Name: </label>
                    <input 
                        type="text" 
                        id="edit-nearlywed_1_last" 
                        name="nearlywed_1_last" 
                        value={form.nearlywed_1_last}
                        onChange={updateInfo}
                    />
                    <br/>
                    {/* nearlywed 2 */}
                    <label>Nearlywed First Name: </label>
                    <input 
                        type="text" 
                        id="edit-nearlywed_2_first" 
                        name="nearlywed_2_first" 
                        value={form.nearlywed_2_first}
                        onChange={updateInfo}
                    />
                     <label>Last Name: </label>
                    <input 
                        type="text" 
                        id="edit-nearlywed_2_last" 
                        name="nearlywed_2_last" 
                        value={form.nearlywed_2_last}
                        onChange={updateInfo}
                    />
                    <br/>
                    {/* Story */}
                    <label>Your Love Story: </label>
                    <input 
                        type="text" 
                        id="edit-our_story" 
                        name="our_story" 
                        value={form.our_story}
                        onChange={updateInfo}
                    />
                    <br/>
                    <label>Create A Wedding Invitation: </label>
                    <input 
                        type="checkbox" 
                        id="check-invitation" 
                        name="invitation" 
                        value={form.invitation}
                        onClick={updateCheckbox}
                    />
                    <br/>
                     <label>Create a Wedding Website: </label>
                    <input 
                        type="checkbox" 
                        id="check-website" 
                        name="website" 
                        value={form.website}
                        onClick={updateCheckbox}
                    />
                    <input 
                        type="submit" 
                        value="Submit"
                    />
                </form>
            </div>

            <div>
                <h2>Add a Photo</h2>
                <form onSubmit={createPics}>
                    <label>Choose a photo to share with family and friends:</label>
                    <input
                        type="file"
                        id="photo"
                        name ="photo"
                        accept='image/*'
                        onChange={(e)=> {setPicData(e.target.files[0])}}
                    />
                    <input 
                        type="submit" 
                        value="Submit"
                    />
                </form>
                <img src="http://localhost:4020/rails/active_storage/disk/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaDdDVG9JYTJWNVNTSWhhWEEyZFdJME9XcHlaRFk1ZEhNeFkyTnRhRE5yTlRSaGJ6QjRZZ1k2QmtWVU9oQmthWE53YjNOcGRHbHZia2tpVldsdWJHbHVaVHNnWm1sc1pXNWhiV1U5SW5KdmJXVnZMV0Z1WkMxcWRXeHBaWFF1YW5CbFp5STdJR1pwYkdWdVlXMWxLajFWVkVZdE9DY25jbTl0Wlc4dFlXNWtMV3AxYkdsbGRDNXFjR1ZuQmpzR1ZEb1JZMjl1ZEdWdWRGOTBlWEJsU1NJUGFXMWhaMlV2YW5CbFp3WTdCbFE2RVhObGNuWnBZMlZmYm1GdFpUb0tiRzlqWVd3PSIsImV4cCI6IjIwMjItMTAtMDVUMjE6NTM6NDIuMjIyWiIsInB1ciI6ImJsb2Jfa2V5In19--ed958c1c4d08ea46b5d97a3c1a5ea98db1ebadaa/romeo-and-juliet.jpeg" alt="couples photo"/>
            </div>
            
        </div>
    )
  }
  
  export default EditInfo;