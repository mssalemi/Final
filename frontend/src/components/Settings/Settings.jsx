import React from 'react'
import {Link} from 'react-router-dom'
import './Settings.css'

function Settings() {
  return (
    <div className="nav-settings">
       <Link to={`/`}><div className="nav-settings--item">Home</div></Link>
    </div>
  )
}

export default Settings
