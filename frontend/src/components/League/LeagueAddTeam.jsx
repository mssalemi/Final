import React from 'react'
import {useParams} from "react-router-dom";
import {addTeam} from '../../services/leagues'
import TeamSearch from './TeamSearch';

function LeagueAddTeam(props) {
  const addTeamToLeague = async (teamId) => {
    console.log(`trying to add team with id = ${teamId} to league with id = ${props.id}`)
    const data = await addTeam(props.id, teamId);
    console.log(data);
  }

  return (
    <div>
      <h1>Add Team To League</h1>
      <TeamSearch league={props.league}refreshLeague={props.refreshLeague} addTeamToLeague={addTeamToLeague} />
      
    </div>
  )
}

export default LeagueAddTeam
