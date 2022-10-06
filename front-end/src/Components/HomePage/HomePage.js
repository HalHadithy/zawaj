import MoodBoard from "./Moodboard/Moodboard";
import HomeBlog from "./HomeBlog"
import OtherPages from "./OtherPages";
import '../../Style/HomePage.css'

const HomePage = ({isLoggedIn, currentCouple}) => {

  // const [currentCouple, setCurrentCouple] = useState({}) 

  // useEffect(() =>{
  //   let token = localStorage.getItem("jwt");
  //   console.log(token)
  //   if (token) {
  //     fetch(`http://localhost:4020/current_couple`, {
  //       headers: {
  //         token: token,
  //         "Content-Type": "application/json",
  //       },
  //     })
  //       .then((res) => res.json())
  //       .then((couple) => {
  //         setCurrentCouple(couple)
  //         setIsLoggedIn(true)
  //       });
  //   }
  //   else {
  //     setCurrentCouple({})
  //   }
  // },[]) 


  return (
    <div id="home">
      <OtherPages isLoggedIn ={isLoggedIn}/>
      <MoodBoard/>
      <div  className="home-div" id="home-featured">
        <div id="home-featured-title">
          <hr/>
          <h2>where we have been featured</h2>
          <hr/>
        </div>

        <div id="home-featured-list">
            <h4 id="vogue"><strong>Vogue</strong></h4>
            <h4 id="Bye-money">Bye Money Magazine</h4>
            <h4 id="forbes">Forbes</h4>
            <h4 id="allure">allure</h4>
        </div>
      </div>
     <HomeBlog/>
    </div>
  );
}

export default HomePage;
