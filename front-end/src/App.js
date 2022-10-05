import { useEffect, useState } from 'react'
import {Routes,Route} from "react-router-dom"

import NavBar from './Components/NavBar/NavBar'
import HomePage from './Components/HomePage/HomePage'
import LogIn from './Components/LogIn_CreateNew/LogIn'
import LogOut from './Components/LogIn_CreateNew/LogOut'
import CreateAnAccount from './Components/LogIn_CreateNew/CreateAnAccount'
import LOLSilly from './Components/LOLSilly'
import ProfilePage from './Components/CoupleProfile/ProfilePage'
import EditGuestList from './Components/CoupleProfile/EditGuestList'
import RsvpSummary from './Components/CoupleProfile/RsvpSummary'
import EditInfo from './Components/CoupleProfile/EditInfo'
import Footer from './Components/Footer/Footer'

import './App.css'
import './Style/ProfilePage.css'
import './Style/NavBar.css'
import './Style/EditGuests.css'
import './Style/LogIn_CreateNew.css'




function App() {

  const [isLoggedIn, setIsLoggedIn] = useState(false)
  const [currentCouple, setCurrentCouple] = useState({})
  const [guestList, setGuestList] = useState([])


  useEffect(() =>{
    let token = localStorage.getItem("jwt");
    if (token) {
      fetch(`http://localhost:4020/current_couple`, {
        headers: {
          token: token,
          "Content-Type": "application/json",
        },
      })
        .then((res) => res.json())
        .then((couple) => {
          setCurrentCouple(couple)
          setIsLoggedIn(true)
        });
    }
    else {
      setCurrentCouple({})
    }
  },[isLoggedIn])  


    useEffect(() =>{
        let token = localStorage.getItem("jwt");
        fetch(`http://localhost:4020/guests_couple`, {
            headers: {
                token: token,
                "Content-Type": "application/json",
            },
        })
        .then((res) => res.json())
        .then((guests) => setGuestList(guests));
      },[]) 



  return (
    <div>
      <NavBar isLoggedIn ={isLoggedIn} currentCouple={currentCouple} />
      <div className='body-thing'>
        <Routes>
          <Route exact path='/' element={<HomePage isLoggedIn={isLoggedIn} currentCouple={currentCouple} />} />
          <Route exact path="/create-account" element={<CreateAnAccount setIsLoggedIn={setIsLoggedIn}/>} />
          <Route exact path="/login" element={<LogIn setIsLoggedIn={setIsLoggedIn}/>} />
          <Route exact path="/logout" element={<LogOut setIsLoggedIn={setIsLoggedIn}/>} />
          <Route exact path="/profile-page" element={<ProfilePage currentCouple={currentCouple}/>} />
          <Route exact path="/edit-guest-list" element={<EditGuestList currentCouple={currentCouple} guestList={guestList}/>} />
          <Route exact path="/edit-info" element={<EditInfo setCurrentCouple={setCurrentCouple}/>} />
          <Route exact path="/rsvp-summary" element={<RsvpSummary currentCouple={currentCouple}/>} />
          <Route exact path="*" element={<LOLSilly/>} />
        </Routes>
      </div>
      
      <Footer/>
    </div>
  );
}


export default App;
