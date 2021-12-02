import React from 'react'
import {Link} from 'react-router-dom'
import './Settings.css'

function Settings(props) {
  return (
    <div className="nav-settings">
        <Link to={`/`}><div className="nav-settings--item">Home</div></Link>
        <Link to={`/users/${props.user._id}`}><div className="nav-settings--item">Dashboard</div></Link>
    </div>
  )
}

export default Settings
