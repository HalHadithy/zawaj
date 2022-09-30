import { useState } from "react";
import { useNavigate } from "react-router-dom";

const CreateAnAccount = ({setIsLoggedIn, setCurrentCouple}) => {





  const navigate = useNavigate();

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("")

  
  const handleSubmit = (e) =>{
    e.preventDefault()


    navigate(-2)

  }



    return (
      <div>
        <title>Login</title>

        <form onSubmit={handleSubmit}>
            <label>
              Username:
              <input
                type="text"
                value={username}
                onChange={(e)=>setUsername(e.target.value)}
              />
            </label>
            <label>
              Password:
              <input
                type="text"
                value={password}
                onChange={(e)=>{ setPassword(e.target.value) } }
              />
            </label>
            
          <button type="submit">Login</button>

        </form>

        
      </div>
    );
  }
  
  export default CreateAnAccount;