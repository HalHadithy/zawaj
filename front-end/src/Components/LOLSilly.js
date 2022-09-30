import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import '../Style/LOLSilly.css'


const LOLSilly = () => {
    const navigate = useNavigate()

    useEffect(()=>{
        setTimeout(()=>{
            navigate(-1)
        }, 6100)
    }, [])

    return (
        <div className="silly">
            <h1>Lol Silly, This Page Doesn't Work Yet</h1>
            <img src='https://media1.giphy.com/media/EtB1yylKGGAUg/giphy.gif?cid=ecf05e47j9li84s2qthps5hv7v90pf96z0fglhq5gfrbvkb5&rid=giphy.gif&ct=g' alt="silly"/>
        </div>
    )

}

export default LOLSilly;