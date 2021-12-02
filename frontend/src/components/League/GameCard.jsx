import React, {useState, useEffect} from 'react'
import {Link} from 'react-router-dom'
import {getTeam} from '../../services/teams';
import CircularProgress from '@material-ui/core/CircularProgress';

function Game(props) {

  const [homeTeam, setHomeTeam] = useState(null)
  const [awayTeam, setAwayTeam] = useState(null)

  useEffect(async () => {
    const homeTeamData = await getTeam(props.gameInfo.homeTeam)
    setHomeTeam(homeTeamData.data.name.toUpperCase())
    const awayTeamData = await getTeam(props.gameInfo.awayTeam)
    setAwayTeam(awayTeamData.data.name.toUpperCase())
  }, [])


  return (
    <div>
      <div class="card text-center">
        <div class="card-body">
          <h5 class="card-title">Date: {props.gameInfo.date}</h5>
          <p class="card-text">(H) {homeTeam || <CircularProgress />} VS (A) {awayTeam || <CircularProgress color="secondary" />}</p>
          <Link to={`/games/${props.gameInfo._id}`}><div class="btn btn-primary">View Game</div></Link>
        </div>
      </div>
    </div>
  )
}

export default Game
