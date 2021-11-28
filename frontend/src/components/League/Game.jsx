import React, { useState } from 'react'

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
        <button onClick={() => {
          console.log(homeTeam)
          console.log(awayTeam)
        }}>Create Game</button>
      </div>
    </>
  )
}

export default Game
