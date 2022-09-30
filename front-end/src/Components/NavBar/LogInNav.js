import { useNavigate } from "react-router-dom";


const LogIn = ({isLoggedIn}) => {

    const navigate = useNavigate()
  
    const login = <h5 onClick={()=> navigate("/login")}>login</h5>
    
    const loggedIn = <div>
                        <div id= "loggedIn-nav">
                            <img src="" alt="avatar" id="loggedIn-nav-avatar" />
                            <h5>{ `Frank & Lisa` /*`${nearlywedName1} & ${nearlywedName2}`*/}</h5>
                        </div>
                          
                        <div id="loggedIn-nav-hidden">
                            <h6 onClick={() => navigate("/profile-page")}>view profile</h6>
                            <h6 onClick={() => navigate("/logout")}>logout</h6>
                        </div>
                     </div>

    return (
        <div>
            {isLoggedIn ? loggedIn : login}
        </div>
       
    );
  }
  
  export default LogIn;
