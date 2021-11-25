import React, {useState, useEffect} from 'react'

import { Routes, Route } from "react-router-dom";

import ChangePassword from '../../components/ChangePassword.jsx/ChangePassword'
import CreateProfile from '../../components/CreateProfile/CreateProfile'
import EditProfile from '../../components/EditProfile/EditProfile'
import Profile from '../../components/Profile/Profile'
import Settings from '../../components/Settings/Settings'
import './Main.css'

// ROUTER CODE - react-router-dom v6 - way different than class - dont forget
// Following this: https://enlear.academy/whats-new-in-react-router-6-e34e451e5285 

function Main(props) {

  return (
    <div className="main-container">
      <Settings />
      {/* <EditProfile user={props.user}/> */}
      {/* <ChangePassword user={props.user} /> */}
      <Routes>
          <Route path="/users/:id" element={<Profile user={props.user} />}></Route>
      </Routes>
    </div>
  )
}

export default Main
