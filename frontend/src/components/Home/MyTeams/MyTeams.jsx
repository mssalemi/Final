import React, {useState, useEffect} from 'react'
import {Link} from 'react-router-dom'
import {getTeams} from '../../../services/teams'

function MyTeams(props) {

  const [teams, setTeams] = useState([])

  useEffect(async () => {
    const {data} = await getTeams();
    console.log(data)
    const userTeams = data.filter(team => {
      return team.roster.filter(user => user._id === props.user._id).length > 0
    })
    setTeams(userTeams)
    console.log(teams)
  }, [])

  return (
    <div>
      <h1>Your Team's</h1>
      {
        <ul class="list-group">
          {
            teams.length > 0 ? teams.map( team => {
              return <Link to={`/teams/${team._id}`}><li class="list-group-item">{team.name}</li></Link>}
            ) : <div>You are not currently on any teams.</div>
          }
        </ul>
      }
    </div>
  )
}

export default MyTeams
