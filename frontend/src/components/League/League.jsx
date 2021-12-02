import React, { useState, useEffect } from 'react'
import {useParams, Link} from "react-router-dom";
import { getLeague, getLeagues } from '../../services/leagues'
import { CircularProgress } from '@material-ui/core'
import TeamList from './TeamList'
import LeagueAddTeam from './LeagueAddTeam';
import ViewGames from './ViewGames';

function League() {

  const { id } = useParams();
  const [league, setLeague] = useState(null);

  useEffect(() => {
    refreshLeague()
  }, [])

  const refreshLeague = async () => {
    console.log("refrsh league")
    const {data} = await getLeagues();
    setLeague(data.filter(league => league._id == id)[0])
    console.log(league);
  }

  return (
    <div>
      {
        league ? <>
          We got a league!
          <TeamList teams={league.teams}/>
        </> : <CircularProgress />
      }
      {
        league && <LeagueAddTeam refreshLeague={refreshLeague} league={league} id={id}/>
      }
      {
        league && <ViewGames league={league}/>
      }
      <Link to={`/leagues/${id}/edit`}>
        Edit
      </Link>
    </div>
  )
}

export default League
