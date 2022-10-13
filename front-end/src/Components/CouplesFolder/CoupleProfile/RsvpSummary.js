import ProfileNavBar from "./ProfileNavBar";

const RsvpSummary= () => {

    return (
        <div className="profile-div">
            <ProfileNavBar/>
            <div className="profile-right">
                <h2>RSVP Summary</h2>
                <div className="rsvp-div" id="rsvp-charts">
                    <h2>Pie Charts and Shit</h2>
                </div>
                <div className="rsvp-div" id="rsvp-info">
                    <button>Send Update Email To Everyone</button>
                    <div className="rsvp-info-div">
                        <h3>Guests Attending</h3>
                        <button>Compose Email To Confirmed Attendees</button>
                    </div>

                    <div className="rsvp-info-div">
                        <h3>Guests Not Attending</h3>
                    </div>

                    <div className="rsvp-info-div">
                        <h3>Awaiting Replies From</h3>
                        <button>Send Reminder Email</button>
                    </div>
                </div>
                <div className="rsvp-div" id="rsvp-info">
                    <button>Compose Email To Guest List</button>
                </div>
            
            </div>
        </div>
        
    )
  }
  
  export default RsvpSummary;