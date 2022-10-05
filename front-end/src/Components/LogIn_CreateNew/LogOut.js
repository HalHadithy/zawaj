import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const LogOut= ({setIsLoggedIn}) => {

    const navigate = useNavigate()
    const [logoutMessage, setLogoutMessage] = useState(false)

    useEffect(()=>{
        console.log("starting")
        let token = localStorage.getItem("jwt");
        if (token) {
            localStorage.removeItem('jwt');
            console.log(localStorage)
            setIsLoggedIn (false)
            setLogoutMessage (false)
            console.log(token)
        }
        else {
            setLogoutMessage (true)
            setIsLoggedIn (true)
        }
        
        setTimeout(()=>{
            navigate('/')
        }, 4000)
    }, [])
        
    return (
        <div>
            {logoutMessage ?
                <div>
                    <h1>You have logged out</h1>
                    <h2>We hope to see you soon!</h2>
                </div>
            :    
                <div>
                    <h1>Your logout has failed.</h1>
                    <h2>That's strange, please try again.</h2>
                </div>    
            }
        </div>
        
    )
}
  
export default LogOut;