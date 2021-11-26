import React from 'react'
import { Link } from 'react-router-dom'

function TeamList(props) {
  

  return (
    <>
     <div class="list-group">
     {
      props.teams.map(team => {
        return (
          <div className="list-group-item list-group-item-info"><Link to={`/teams/${team._id}`}>{team.name}</Link></div>
        )
      })
    }
     </div>
    </>
  )
}

export default TeamList
