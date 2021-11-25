import React, {useState, useEffect} from 'react';
import { Link } from 'react-router-dom';
import {getTeams} from '../../services/teams';

function AllTeams() {

  const [teams, setTeams] = useState(null)

  useEffect(async () => {
    const {data} = await getTeams();
    setTeams(data);
  }, [])

  return (
    teams ? (
      <div>
        <h1>All Teams</h1>
        <ul class="list-group list-group-flush">
          {
            teams.map(team => {
              return (
                <li class="list-group-item"><Link to={`${team._id}`}>{team.name}</Link>{team.name}</li>
              )
            })
          }
        </ul>
      </div>
    ) : <div>... loading</div>
  )
}

export default AllTeams
