import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const LogOut= ({setIsLoggedIn}) => {

    const navigate = useNavigate()
    
    setIsLoggedIn(false)

    useEffect(()=>{
        setTimeout(()=>{
            navigate('/')
        }, 4500)

    }, [])

    return (
        <div>
            <h1>You have logged out</h1>
            <h2>We hope to see you soon!</h2>
        </div>
    )
  }
  
  export default LogOut;