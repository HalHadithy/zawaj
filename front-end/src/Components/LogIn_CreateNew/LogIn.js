import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

import logo from '../../Images/logo.jpeg'
import rings from '../../Images/rings.png'


const LogIn = ({setIsLoggedIn}) => {

  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    username:'',
    password:''
  });

  
  const handleSubmit = (e) =>{
    e.preventDefault()
    console.log("starting post")
    console.log(formData)

    fetch("http://localhost:4020/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify( formData ),
    })
    .then((r) => r.json())
    .then((data) => {
      localStorage.setItem("jwt", data.token)
      // console.log(data)
      setIsLoggedIn(true)
    })
    navigate(-1)
  };  


  let updateForm = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };
  console.log(formData)
  
    

    return (
      <div className="login-container">
        {/* <img src={rings} alt="rings" className="rings"/> */}

        <img src={logo} alt="company logo" className="company-logo" onClick={()=> navigate('/')}/>
        <h3>Login</h3>

        <form onSubmit={handleSubmit}>
            <label 
              className="floating-label"
              for="username"
            >
              Username:
            </label>
            <input
              placeholder="Username"
              type="text"
              name="username"
              value={formData.username}
              onChange={updateForm}
            />
            
            <label 
              className="floating-label"
              for="password"
            >
              Password:
            </label>
            <input
              placeholder="Password"
              type="text"
              name="password"
              value={formData.password}
              onChange={updateForm}
            />
         
            
          <button type="submit" className="log-create-btn">Login</button>

        </form>

        
      </div>
    );
  }
  
  export default LogIn;
