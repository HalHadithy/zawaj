import { useState } from "react";
import { useNavigate } from "react-router-dom";

const LogIn = ({setIsLoggedIn, setCurrentCouple}) => {

  const navigate = useNavigate();

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("")

  
  const handleSubmit = (e) =>{
    e.preventDefault()
    // fetch("/login", {
    //   method: "POST",
    //   headers: {
    //     "Content-Type": "application/json",
    //   },
    //   body: JSON.stringify({ username }),
    // })
    //   .then((r) => r.json())
    //   .then((couple) => setCurrentCouple(couple));
    // }

    navigate(-1)

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
  
  export default LogIn;



  