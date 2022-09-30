import { useEffect, useState } from 'react'
import ProfileNavBar from './ProfileNavBar'

const EditInfo= () => {

    const [coupleInfo, setCoupleInfo] = useState({})
    const [picData, setPicData] = useState("")
    const [form, setForm] = useState({ email, username, nearlywed_1_first, nearlywed_1_last, nearlywed_2_first, nearlywed_2_last, our_story, venue_name, venue_location, invitation, invitation_style, website, website_style})
    
    useEffect(() => {
        fetch(`/current_couple/${1}`, {
            method: "GET"
        })
        .then((res) => res.json())
        .then((data) => {
            setCoupleInfo(data)
            setForm(data)
        })
    },[])

    const updateCheckbox =()=>{
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
        fetch(`/current_couple/${id}`, {
            method: "PATCH",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(form)
        })
        .then((res) => res.json())
        .then((data) => {
        //   localStorage.setItem("jwt", data.token);
        setCoupleInfo(data)})
    }

    const createPics = (e) => {
        e.preventDefault()
        const formData = new FormData();
        formData.append('image', picData)
        fetch(`/change_photo/${1}`, {
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
                    <label for="check-invitation">Username: </label>
                    <input 
                        type="text" 
                        id="edit-username" 
                        name="username" 
                        value={form.username}
                        onChange={updateInfo}
                    />
                    <br/>
                    {/* password, do I want to let them reset this??? */}
                    <label for="check-invitation">Password: </label>
                    <input 
                        type="text" 
                        id="edit-password" 
                        name="password" 
                        value={form.password}
                        onChange={updateInfo}
                    />
                    <br/>
                    {/* email */}
                    <label for="check-invitation">Primary Email: </label>
                    <input 
                        type="text" 
                        id="edit-email" 
                        name="email" 
                        value={form.email}
                        onChange={updateInfo}
                    />
                    <br/>
                    {/* nearlywed 1 */}
                    <label for="check-invitation">Nearlywed First Name: </label>
                    <input 
                        type="text" 
                        id="edit-nearlywed_1_first" 
                        name="nearlywed_1_first" 
                        value={form.nearlywed_1_first}
                        onChange={updateInfo}
                    />
                     <label for="check-invitation">Last Name: </label>
                    <input 
                        type="text" 
                        id="edit-nearlywed_1_last" 
                        name="nearlywed_1_last" 
                        value={form.nearlywed_1_last}
                        onChange={updateInfo}
                    />
                    <br/>
                    {/* nearlywed 2 */}
                    <label for="check-invitation">Nearlywed First Name: </label>
                    <input 
                        type="text" 
                        id="edit-nearlywed_2_first" 
                        name="nearlywed_2_first" 
                        value={form.nearlywed_2_first}
                        onChange={updateInfo}
                    />
                     <label for="check-invitation">Last Name: </label>
                    <input 
                        type="text" 
                        id="edit-nearlywed_2_last" 
                        name="nearlywed_2_last" 
                        value={form.nearlywed_2_last}
                        onChange={updateInfo}
                    />
                    <br/>
                    {/* Story */}
                    <label for="check-invitation">Your Love Story: </label>
                    <input 
                        type="text" 
                        id="edit-our_story" 
                        name="our_story" 
                        value={form.our_story}
                        onChange={updateInfo}
                    />
                    <br/>
                    <label for="check-invitation">Create A Wedding Invitation: </label>
                    <input 
                        type="checkbox" 
                        id="check-invitation" 
                        name="invitation?" 
                        value={form.invitation}
                        onCheck={updateCheckbox}
                    />
                    <br/>
                     <label for="check-website">Create a Wedding Website: </label>
                    <input 
                        type="checkbox" 
                        id="check-website" 
                        name="website?" 
                        value={form.website}
                        onCheck={updateCheckbox}
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
                        id="image"
                        accept='image/*'
                        onChange={(e)=>setPicData(e.target.files[0])}
                    />
                    <input 
                        type="submit" 
                        value="Submit"
                    />
                </form>
            </div>
            
        </div>
    )
  }
  
  export default EditInfo;