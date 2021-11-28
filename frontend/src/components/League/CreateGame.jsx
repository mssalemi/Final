import React, { useEffect, useState } from 'react'
import {useParams} from "react-router-dom";
import {getTeams} from '../../services/teams'
import Game from './Game'

function CreateGame() {

  const [teams, setTeams] = useState(null)

  useEffect(async () => {
    const {data} = await getTeams();
    setTeams(data)
  }, [])

  const { id } = useParams();

  return (
    <div>
      <h1>Create Game</h1>
      {
        teams ? <Game teams={teams} leagueId={id} /> : <div>...loading</div>
      }
    </div>
  )
}

export default CreateGame
