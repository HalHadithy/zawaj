import LogInNav from "./LogInNav";
import { useNavigate } from "react-router-dom";

const NavBar = (  {isLoggedIn, setIsLoggedIn}  ) => {
  const navigate = useNavigate();


  const loginNav = <LogInNav isLoggedIn ={isLoggedIn} setIsLoggedIn={setIsLoggedIn}/> 

  return (
    <div>
      <div className="scrollable-nav">
        <h5>Couples</h5>
        <h5>Vendors</h5>
        {isLoggedIn ? null : loginNav}
        {isLoggedIn ? null : <h5 onClick={()=> navigate('/create-account')}>Create An Account</h5>}
      </div>
      
      <div className="not-scrollable-nav">
        <img src="company-logo" alt="company logo" className="company-logo"/>
        {isLoggedIn ? loginNav : null }
      </div>

    </div>
  );
}
  
export default NavBar;