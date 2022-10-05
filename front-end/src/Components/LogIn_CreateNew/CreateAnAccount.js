import { useState } from "react";
import { useNavigate } from "react-router-dom";

import logo from '../../Images/logo.jpeg'


const CreateAnAccount = ({setIsLoggedIn}) => {

  const navigate = useNavigate();
  
  const [formData, setFormData] = useState({
    username:'',
    password:'',
    email:'',
    nearlywed_1_first: '', 
    nearlywed_1_last: '',
    nearlywed_2_first:'',
    nearlywed_2_last:''
  });

  
  const handleSubmit = (e) =>{
    e.preventDefault()
    console.log("starting create")
    console.log(formData)

    fetch("http://localhost:4020/couples", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify( formData ),
    })
    .then((r) => r.json())
    .then((data) => {
      localStorage.setItem("jwt", data.token)
      setIsLoggedIn(true)

    })
    navigate(-1)
  }

  let updateForm = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  console.log(formData)
  
    return (
      <div id="create-account" className="login-container">
        <img src={logo} alt="company logo" className="company-logo" onClick={()=> navigate('/')}/>
        <h3>Create An Account</h3>

        <form onSubmit={handleSubmit}>
          <label>
            Username:
            <input
                type="text"
                name="username"
                value={formData.username}
                onChange={updateForm}
            />
          </label>
          <label>
            Password:
            <input
              type="text"
              name="password"
              value={formData.password}
              onChange={updateForm}
            />
          </label>
          <label>
            Primary Email:
            <input
              type="text"
              name="email"
              value={formData.email}
              onChange={updateForm}
            />
          </label>
          <h5>Nearly-Wed Information:</h5>
          <label>
            First Name:
            <input
              type="text"
              name="nearlywed_1_first"
              value={formData.nearlywed_1_first}
              onChange={updateForm}
            />
          </label>
          <label>
            Last Name:
            <input
              type="text"
              name="nearlywed_1_last"
              value={formData.nearlywed_1_last}
              onChange={updateForm}
            />
          </label>

          <h5>Nearly-Wed Information:</h5>
          <label>
            First Name:
            <input
              type="text"
              name="nearlywed_2_first"
              value={formData.nearlywed_2_first}
              onChange={updateForm}
            />
          </label>
          <label>
            Last Name:
            <input
              type="text"
              name="nearlywed_2_last"
              value={formData.nearlywed_2_last}
              onChange={updateForm}
            />
          </label>

          <button type="submit">Create Account</button>

        </form>

        
      </div>
    );
  }
  
  export default CreateAnAccount;