import MoodboardCard from "./MoodboardCard";
const MoodBoard = () => {

    let imgArray = [
        {
            'image':'https://i.pinimg.com/564x/58/e6/4c/58e64cb584943bcfe9bf5ded51b331df.jpg',
            'comment':'I like this dress but objviously its too low cut for a 13 year old'
        },
        {
            'image':'https://i.pinimg.com/564x/11/1d/78/111d782ea4000d961f76340907ce2c4e.jpg',
            'comment':'This veil would look amazing on me'
        },
        {
            'image':'https://i.pinimg.com/564x/45/f7/e2/45f7e2463c63c8ee706bd7ef2b9dd498.jpg',
            'comment':'Maybe we can get the Friar to set up a million candles'
        },
        {
            'image':'https://i.pinimg.com/564x/48/64/47/486447a853f4393c4951ae5db4ea2138.jpg',
            'comment':'Its the renisance and the gentry probably isnt into huppahs...'
        },
        {
            'image':'https://i.pinimg.com/564x/b7/2e/d3/b72ed36656ca5578fbb48850286da2e8.jpg',
            'comment':'I wish I could have this many guests'
        },
        {
            'image':'https://i.pinimg.com/564x/10/e3/11/10e311ce6c757c649f43562114ab20aa.jpg',
            'comment':'Such pretty colors, can also double as casket adornment'
        }    
    ]


    return (
        <div className="home-div" id="home-moodboard">
            <div id="home-moodboard-left">
                <h2>Your Moodboard</h2>
                <p>{imgArray.comment}</p>
            </div>
        
            <div id="home-moodboard-right">
                <div id="moodboardCard-image-carousel">
                    <img src={imgArray.image} alt='inspo pic'/>
                </div>            
            </div>
            
        </div>

    );
  }
  
  export default MoodBoard;

