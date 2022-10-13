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
          <div id="scrollable-nav-other">
            <img src={logo} alt="company logo" className="company-logo" onClick={()=> navigate('/')}/>
            <h1>Zawaj</h1>
          </div>
          {isLoggedIn ? loginNav : null }
        </div>

      </div>
                       
    </div>
    
  )
}
  
export default NavBar;