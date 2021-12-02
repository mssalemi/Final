import React, {useEffect, useState} from 'react'
import {useParams, Link} from "react-router-dom";
import { getGame, editGameScore, editGameDate } from '../../services/leagues'


function EditGame() {

  const [homeScore, setHomeScore] = useState(0);
  const [awayScore, setAwayScore] = useState(0);
  const [gameInfo, setGameInfo] = useState(null)

  const { id } = useParams();

  useEffect(async () => {
    console.log('did we get here')
    const {data} = await getGame(id);
    console.log(data)
    const score = data.score.split('-')
    setGameInfo(data)
    setHomeScore(score[0])
    setAwayScore(score[1])
  }, [])


  const handleScoreChange = async (e) => {
    const newScore = `${homeScore}-${awayScore}`
    console.log(newScore)
    const {data} = await editGameScore(id, newScore)
    console.log(data)
  }

  const handleDateChange = async (e) => {
    const today = new Date();
    await handleScoreChange(null)
    const {data} = await editGameDate(id, today.toString());
    console.log(data)
  }

  return (
    <div>
      Edit Game Here
      <input type="number" value={homeScore} onChange={(e) => setHomeScore(e.target.value)}></input>
      <input type="number" value={awayScore} onChange={(e) => setAwayScore(e.target.value)}></input>
      <button onClick={handleScoreChange}>Change Score</button>

      <button disabled={gameInfo?.date.includes('GMT') ? true : false} onClick={handleDateChange}>Mark Game as Completed</button>
    </div>
  )
}

export default EditGame
