import { useEffect, useState } from 'react'
import ProfileNavBar from './ProfileNavBar'

const EditInfo= () => {

    const [coupleInfo, setCoupleInfo] = useState({})
    const [picData, setPicData] = useState("")
    const [form, setForm] = useState(
        { 
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
    
    useEffect(() => {
        fetch(`http://localhost:4020/current_couple/${1}`, {
            method: "GET"
        })
        .then((res) => res.json())
        .then((data) => {
            console.log(data)
            setCoupleInfo(data)

            // there is a better way to do this but for now, I just want it to work...
            setForm(
                {
                    email: data.email, 
                    username: data.username, 
                    nearlywed_1_first: data.nearlywed_1_first,
                    nearlywed_1_last: data.nearlywed_1_last,
                    nearlywed_2_first: data.nearlywed_2_first, 
                    nearlywed_2_last: data.nearlywed_2_last, 
                    our_story: data.our_story,
                    venue_name: data.venue_name, 
                    venue_location: data.venue_location, 
                    invitation: data.invitation,
                    invitation_style: data.invitation_style,
                    website: data.website,
                    website_style: data.website_style
                })
        })
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
        fetch(`http://localhost:4020/couples/${1}`, {
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
        fetch(`http://localhost:4020/change_photo/${1}`, {
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
                    {/* <br/> */}
                    {/* password, I don't want to let them reset this*/}
                    {/*<label>Password: </label>
                    <input 
                        type="text" 
                        id="edit-password" 
                        name="password" 
                        value={form.password}
                        onChange={updateInfo}
                    /> */}
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