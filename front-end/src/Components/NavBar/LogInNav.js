import { useState } from 'react'

import { useNavigate, useSearchParams } from "react-router-dom";
import rj from '../../Images/rj.jpeg'
import love from '../../Images/love.png'



const LogIn = ({isLoggedIn, currentCouple}) => {

    const [mouseover, setMouseOver] = useState(false)

    const navigate = useNavigate()
    console.log(currentCouple)
  
    const login = <h5 onClick={()=> navigate("/login")}>login</h5>
    
    const loggedIn = <div id="hover-nav" onMouseOver={()=>setMouseOver(true)} onMouseOut={()=>setMouseOver(false)}>
                        <div id= "loggedIn-nav">
                            <img src={currentCouple.photo_url || love} alt="avatar" id="loggedIn-nav-avatar" />
                            <h5>{ `${currentCouple.nearlywed_1_first} & ${currentCouple.nearlywed_2_first}`}</h5>
                        </div>
                        
                        {mouseover 
                        ? 
                        <div id="hiden-dropdown">
                            <a onClick={() => navigate("/profile-page")}>view profile</a>
                            <a onClick={() => navigate("/logout")}>logout</a>
                        </div>
                         : null}

                        
                     </div>

    return (
        <div id="is-logged-in">
            {isLoggedIn ? loggedIn : login}
        </div>
       
    );
  }
  
  export default LogIn;
