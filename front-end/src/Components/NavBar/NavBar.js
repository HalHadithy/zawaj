import LogInNav from "./LogInNav";
import { useNavigate } from "react-router-dom";
import'../../Style/NavBar.css'
import logo from '../../Images/logo.jpeg'

const NavBar = (  {isLoggedIn, currentCouple}  ) => {
  const navigate = useNavigate();
  const loginNav = <LogInNav isLoggedIn ={isLoggedIn} currentCouple={currentCouple}/> 

  return (
    <div>
      <div className="nav">
        <div className="scrollable-nav">
          <div id="coup-vend">
            <h5>Couples</h5>
            <h5>Vendors</h5>
          </div>
          <div id="scrollable-nav-other">
            {isLoggedIn ? null : loginNav}
            {isLoggedIn ? null : <h5 onClick={()=> navigate('/create-account')}>Create An Account</h5>}
          </div>
          
        </div>
        
        <div className="not-scrollable-nav">
          <img src={logo} alt="company logo" className="company-logo" onClick={()=> navigate('/')}/>
          <h2>Zawaj</h2>
          {isLoggedIn ? loginNav : null }
        </div>

      </div>
                       
      <div id="loggedIn-nav-hidden">
          <h6 onClick={() => navigate("/profile-page")}>view profile</h6>
          <h6 onClick={() => navigate("/logout")}>logout</h6>
      </div>
    </div>
    
  )
}
  
export default NavBar;