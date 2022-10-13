const OtherPages = ({isLoggedIn}) => {

    return (
        <div className="home-div" id="home-pages">
            <div className="home-pages">

                <div className="pages-card">
                    <h4>Build Your Wedding Website</h4>
                </div>

                {isLoggedIn ?
                    <div className="pages-card">
                        <h4>Day-Of Schedule</h4>
                    </div>
                :
                    <div className="pages-card">
                        <h4>Wedding Checklist</h4>
                    </div>
                }

                <div className="pages-card">
                    <h4>Order Invitations</h4>
                </div>

            </div>

            <div className="home-pages">

                <div className="pages-card">
                <h4> Wedding Planners in Your Area</h4>
                </div>

                {isLoggedIn ?
                    <div className="pages-card">
                       <h4>Build Your MoodBoard</h4> 
                    </div>
                :
                    <div className="pages-card">
                        <h4>Venues Near You</h4>
                    </div>
                }
            </div>

        </div>
    );
  }
  
  export default OtherPages;


