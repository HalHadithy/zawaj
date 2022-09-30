import MoodboardCard from "./MoodboardCard";
const MoodBoard = () => {





    return (
        <div className="home-div" id="home-moodboard">
            <div id="home-moodboard-left">
                <h2>Your Moodboard</h2>
                <p> comments here {/* {moodboard.comment} will reference MoodboardCard.js here*/}</p>
            </div>
        
            <div id="home-moodboard-right">
                <MoodboardCard/>
            </div>
        </div>
    );
  }
  
  export default MoodBoard;

