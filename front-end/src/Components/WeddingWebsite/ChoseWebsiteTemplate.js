import { useState } from 'react'
import { useNavigate} from "react-router-dom";
import Flower from './Flower'



const ChoseWebsiteTemplate = ({isLoggedIn, currentCouple}) => {

    const navigate = useNavigate()
    console.log(currentCouple)
    const [style, setStyle] = useState('flower')
  
    const editStyle =(e)=>{
        e.preventDefault()
        let token = localStorage.getItem("jwt");
        fetch(`http://localhost:4020/couples_edit`, {
            method: 'PATCH',
            headers: {
                token: token,
                "Content-Type": "application/json",
            },
            body: JSON.stringify(style)
        })
    }

    
    // const loggedIn = <div id="hover-nav">
    //                     <div id= "loggedIn-nav">
    //                         <img src={currentCouple.photo_url || love} alt="avatar" id="loggedIn-nav-avatar" />
    //                         <h5>{ `${currentCouple.nearlywed_1_first} & ${currentCouple.nearlywed_2_first}`}</h5>
    //                     </div>
    //                     <div id="hiden-dropdown">
    //                         <a onClick={() => navigate("/profile-page")}>view profile</a>
    //                         <a onClick={() => navigate("/logout")}>logout</a>
    //                     </div>
    //                  </div>

    // <div id="is-logged-in">
    //     {isLoggedIn ? loggedIn : login}
    // </div>
    return (
        <div >
            <h2>Website Styles</h2>
            <div>
                <div>
                    <h4 onClick={()=>editStyle('winter')}>Winter</h4>
                    <Flower currentCouple={currentCouple} isLoggedIn={isLoggedIn} style={'winter'}/>                    
                </div>
                
                <div>
                    <h4 onClick={()=>setStyle('flower')}>Spring</h4>
                    <Flower currentCouple={currentCouple} isLoggedIn={isLoggedIn} style={style}/>
                </div>

                <div>
                    <h4 onClick={()=>setStyle('summer')}>summer</h4>
                    <Flower currentCouple={currentCouple} isLoggedIn={isLoggedIn} style={style}/>
                </div>

                <div>
                    <h4 onClick={()=>setStyle('fall')}>Fall</h4>
                    <Flower currentCouple={currentCouple} isLoggedIn={isLoggedIn} style={style}/>
                </div>
            </div>
        </div>
       
    );
  }
  
  export default ChoseWebsiteTemplate;
