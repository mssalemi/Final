import React, { useState } from 'react'
import { newGame } from '../../services/leagues'

function Game(props) {

  const [homeTeam, setHomeTeam] = useState("home-default")
  const [awayTeam, setAwayTeam] = useState("away-default")


  return (
    <>
      <div>
        <select onChange={(e) => setHomeTeam(e.target.value)} value={homeTeam} name="homeTeam" class="form-select" aria-label="Default select example">
        <option value="default" selected>Home Team</option>
        {
          props.teams.map( team => {
            return (
              <option value={team._id}>{team.name}</option>
            )
          })
        }
        </select>
      </div>
      <div>
      <select onChange={(e) => setAwayTeam(e.target.value)} value={awayTeam} name="awayTeam" class="form-select" aria-label="Default select example">
        <option value="default" selected>Away Team</option>
        {
          props.teams.map( team => {
            return (
              <option value={team._id}>{team.name}</option>
            )
          })
        }
        </select>
      </div>
      <div>
        <button onClick={async () => {
          console.log(homeTeam)
          console.log(awayTeam)
          const {data} = await newGame(homeTeam, awayTeam, props.leagueId);
          console.log(data)
        }}>Create Game</button>
      </div>
    </>
  )
}

export default Game
