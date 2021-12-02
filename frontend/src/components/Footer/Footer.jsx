import React from 'react'

import './Footer.css'

function Footer(props) {
  return (
    <div className={`footer ${ props.user ? props.user.theme == "Dark" ? "dark" :"light" : "light"}`} >
    </div>
  )
}

export default Footer
