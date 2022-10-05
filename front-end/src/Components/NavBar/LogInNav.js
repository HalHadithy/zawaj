import { useNavigate } from "react-router-dom";
import rj from '../../Images/rj.jpeg'
import love from '../../Images/love.png'



const LogIn = ({isLoggedIn, currentCouple}) => {

    const navigate = useNavigate()
  
    const login = <h5 onClick={()=> navigate("/login")}>login</h5>
    
    const loggedIn = <div id="hover-nav">
                        <div id= "loggedIn-nav">
                            <img src={currentCouple.photo_url || love} alt="avatar" id="loggedIn-nav-avatar" />
                            <h5>{ `${currentCouple.nearlywed_1_first} & ${currentCouple.nearlywed_2_first}`}</h5>
                        </div>
                        <div id="hiden-dropdown">
                            <a onClick={() => navigate("/profile-page")}>view profile</a>
                            <a onClick={() => navigate("/logout")}>logout</a>
                        </div>
                     </div>

    return (
        <div id="is-logged-in">
            {isLoggedIn ? loggedIn : login}
        </div>
       
    );
  }
  
  export default LogIn;
