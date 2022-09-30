const OtherPages = ({isLoggedIn}) => {

    return (
        <div className="home-div" id="home-pages">
            <div className="pages-card">
                Build Your Wedding Website
            </div>

            {isLoggedIn ?
                <div className="pages-card">
                    Day-Of Schedule
                </div>
            :
                <div className="pages-card">
                    Wedding Checklist
                </div>
            }

            <div className="pages-card">
                Order Invitations
            </div>

            <div className="pages-card">
                Wedding Planners in Your Area
            </div>

            {isLoggedIn ?
                <div className="pages-card">
                    Build Your MoodBoard
                </div>
            :
                <div className="pages-card">
                    Venues Near You
                </div>
            }
        </div>
    );
  }
  
  export default OtherPages;


