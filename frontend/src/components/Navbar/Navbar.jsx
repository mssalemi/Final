import './Navbar.css'
import React from 'react'
import { GiSoccerBall } from "react-icons/gi";
import {TextField} from '@material-ui/core'


function Navbar() {
  return (
    <div className="navbar">
      <div className="navbar-icon">
        <GiSoccerBall size={50} />
      </div>
      <div className="navbar-title">
        One League 
      </div>
      <div>
        <TextField id="filled-basic" label="Search" variant="filled"  />
      </div>

    </div>
  )
}

export default Navbar
