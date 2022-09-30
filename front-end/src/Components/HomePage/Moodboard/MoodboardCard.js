import { useState } from "react";

const MoodboardCard = () => {

    // fetch (from a moodboard table that won't be created yet)
    
    const [imgArray, setImgArray]  = useState ([
        'https://i.pinimg.com/564x/58/e6/4c/58e64cb584943bcfe9bf5ded51b331df.jpg',
        'https://i.pinimg.com/564x/11/1d/78/111d782ea4000d961f76340907ce2c4e.jpg',
        'https://i.pinimg.com/564x/45/f7/e2/45f7e2463c63c8ee706bd7ef2b9dd498.jpg',
        'https://i.pinimg.com/564x/48/64/47/486447a853f4393c4951ae5db4ea2138.jpg',
        'https://i.pinimg.com/564x/b7/2e/d3/b72ed36656ca5578fbb48850286da2e8.jpg',
        'https://i.pinimg.com/564x/10/e3/11/10e311ce6c757c649f43562114ab20aa.jpg'
    ])

    return (
      <div id="moodboardCard-image-carousel">
        
        {imgArray.map((image)=><img src={image} alt='inspo pic'/>)}
        
        
      </div>
    );
  }
  
  export default MoodboardCard;


