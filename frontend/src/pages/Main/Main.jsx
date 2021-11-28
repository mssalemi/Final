import React, {useState, useEffect} from 'react'

import { Routes, Route } from "react-router-dom";

import ChangePassword from '../../components/ChangePassword.jsx/ChangePassword'
import CreateProfile from '../../components/CreateProfile/CreateProfile'
import EditProfile from '../../components/EditProfile/EditProfile'
import Profile from '../../components/Profile/Profile'
import Settings from '../../components/Settings/Settings'
import Teams from '../../components/Teams/Teams'
import Team from '../../components/Team/Team';
import './Main.css'
import CreateTeam from '../../components/CreateTeam/CreateTeam';
import EditTeam from '../../components/EditTeam/EditTeam';
import Leagues from '../../components/Leagues/Leagues'
import League from '../../components/League/League'
import CreateLeague from '../../components/League/CreateLeague'
import LeagueAddTeam from '../../components/League/LeagueAddTeam'
import CreateGame from '../../components/League/CreateGame';

// ROUTER CODE - react-router-dom v6 - way different than class - dont forget
// Following this: https://enlear.academy/whats-new-in-react-router-6-e34e451e5285 

function Main(props) {

  return (
    <div className="main-container">
      <Settings />
      {/* <EditProfile user={props.user}/> */}
      {/* <ChangePassword user={props.user} /> */}
      <Routes>
          <Route exact path="/users/:id" element={<Profile user={props.user} />}></Route>
          <Route exact path="/users/edit" element={<EditProfile user={props.user}/>}></Route>

          <Route exact path="/teams" element={ <Teams />}></Route>
          <Route exact path="/teams/:id" element={<Team />}></Route>
          <Route exact path="/teams/:id/edit" element={<EditTeam />}></Route>
          <Route exact path="/teams/create" element={<CreateTeam />}></Route>

          <Route exact path="/leagues" element={ <Leagues user={props.user} /> }></Route>
          <Route exact path="/leagues/:id" element={<League /> }></Route>
          <Route exact path="/leagues/:id/edit" element={ <p>Edit</p> }></Route>
          <Route exact path="/leagues/:id/game" element={ <CreateGame /> }></Route>
          <Route exact path="/leagues/create" element={ <CreateLeague /> }></Route>
          <Route exact path="/leagues/addTeam" element={ <LeagueAddTeam /> }></Route>

      </Routes>
    </div>
  )
}

export default Main
