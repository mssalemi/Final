import React, { useState, useEffect } from 'react'
import LeaugeList from './LeagueList'
import {CircularProgress} from '@material-ui/core'
import {getLeagues} from '../../services/leagues'

function Leagues(props) {

  const [leagues, setLeagues] = useState(null)

  useEffect(async () => {
    // for some fake loading
    const {data} = await getLeagues();
    setLeagues(data);
    console.log(data)
  }, [])

  return (
    <div>
      {
        leagues ? <LeaugeList leagues={leagues} user={props.user}/> : <CircularProgress />
      }
    </div>
  )
}

export default Leagues
