import { useState } from 'react'
import {Routes,Route} from "react-router-dom"

import NavBar from './Components/NavBar/NavBar'
import HomePage from './Components/HomePage/HomePage'
import LogIn from './Components/LogIn_CreateNew/LogIn'
import LogOut from './Components/NavBar/LogOut'
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




function App() {

  const [isLoggedIn, setIsLoggedIn] = useState(false)

  return (


    <div>
      <NavBar isLoggedIn ={isLoggedIn} setIsLoggedIn={setIsLoggedIn}/>
      <Routes>
        <Route exact path='/' element={<HomePage isLoggedIn={isLoggedIn} />} />
        <Route exact path="/create-account" element={<CreateAnAccount/>} />
        <Route exact path="/login" element={<LogIn setIsLoggedIn={setIsLoggedIn}/>} />
        <Route exact path="/logout" element={<LogOut setIsLoggedIn={setIsLoggedIn}/>} />
        <Route exact path="/profile-page" element={<ProfilePage/>} />
        <Route exact path="/edit-guest-list" element={<EditGuestList/>} />
        <Route exact path="/edit-info" element={<EditInfo/>} />
        <Route exact path="/rsvp-summary" element={<RsvpSummary/>} />
        <Route exact path="*" element={<LOLSilly/>} />
      </Routes>
      <Footer/>
    </div>

  );
}


export default App;
