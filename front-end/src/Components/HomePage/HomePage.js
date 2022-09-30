import MoodBoard from "./Moodboard/Moodboard";
import HomeBlog from "./HomeBlog"
import OtherPages from "./OtherPages";

const HomePage = ({isLoggedIn}) => {

  return (
    <div>
      <OtherPages isLoggedIn ={isLoggedIn}/>
      <MoodBoard/>
      <div  className="home-div" id="home-featured">
        <h3>where we have been featured</h3>
        <ul>
            <li>Vogue</li>
            <li>Bye Money Magazine</li>
            <li>Forbes</li>
            <li>Allure</li>
        </ul>
      </div>
     <HomeBlog/>
    </div>
  );
}

export default HomePage;
