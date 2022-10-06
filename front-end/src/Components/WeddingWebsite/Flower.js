import { useNavigate } from "react-router-dom";




const Flower = ({currentCouple, isLoggedIn, style}) => {

   
  

    return (
        <div id = {style}>
            {isLoggedIn 
            ? 
                <h2>Flower</h2>
            : 
                <h2>{`${currentCouple.nearlywed_1_first} and ${currentCouple.nearlywed_1_first}'s Wedding`}</h2>
            }

            <h2>Flower</h2>
            <div>
                <div>
                    
                </div>
                </div>
        </div>
       
    );
  }
  
  export default Flower;
