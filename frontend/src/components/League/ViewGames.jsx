import React from 'react'
import { getLeagues } from '../../services/leagues'
import GameCard from './GameCard'

function ViewGames({league}) {

  return (
    <div>
      {
        league.games.length > 0 ? <>
        
          {
            league.games.map( (game) => {
              console.log(game)
              return (
                <GameCard gameInfo={game} />
              )
            } )
          }

        </> : <>No Upcoming for this League</>
      }
    </div>
  )
}

export default ViewGames
