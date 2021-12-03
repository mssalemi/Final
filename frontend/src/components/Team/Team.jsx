import React, { useState, useEffect } from 'react'
import {useParams} from "react-router-dom";
import { getTeam, addPlayerToTeam } from '../../services/teams';
import { getUserData } from '../../services/users';

import Roster from '../Roster/Roster';

// TODO: fix this into multiple componets for player search + add to team 

function Team() {

  const { id } = useParams();
  const [team, setTeam] = useState(null)

  const [playersSelector, setPlayersSelector] = useState(null)
  const [playerSearch, setPlayerSearch] = useState('')
  const [playerSearchDisplay, setPlayerSearchDisplay] = useState([])

  useEffect( () => {
    updateTeam()
  }, [])

  const updateTeam = async () => {
    const {data} = await getTeam(id)
    setTeam(data)
  }

  const loadPlayers = async () => {
    console.log("add players to team")
    const {data} = await getUserData();
    setPlayersSelector(data)
    console.log(data)
  }

  const handlePlayerSearchChange = (e) => {
    setPlayerSearch(e.target.value)
  }

  const handleSearchPlayers = (e) => {
    console.log("search for players with name - " + playerSearch);
    console.log("ALL PLAYERS")
    console.log(playersSelector)
    const playersToShow = playerSearch ? playersSelector.filter( player => {
      const fullName = (player.firstName + " " + player.lastName).replace(/ /g,"");
      return fullName.toUpperCase().includes(playerSearch.toUpperCase())
    } ) : []
    console.log("FILTERED PLAYERS")
    console.log(playersToShow)
    setPlayerSearchDisplay(playersToShow)
  }

  const handleAddPlayerSubmit = async (e) => {
    e.preventDefault();
    //addPlayerToTeam(currentlySelectedPlayer, team);
    // Need Team Id
    console.log(team._id)
    // Need USer Id
    console.log(e.target.playerId.value)
    // (player, team)
    const {data} = await addPlayerToTeam(e.target.playerId.value, team._id);
    console.log(data)
    await updateTeam()
  }

  return (
    <div>
    {      
      team ? (
        <div>
          <h1>{team.name}</h1>
          <Roster roster={team.roster}/>
        </div>
      ) : <div>....loading</div>
    }
    {
      playersSelector ? (
        <div> 
          Search for Players to Add to this Team:
          <div>
            <input value={playerSearch} onChange={handlePlayerSearchChange} type="text"></input>
            <button onClick={handleSearchPlayers}>Search</button>
            {
              playerSearchDisplay.length > 0 && <button onClick={()=>setPlayerSearchDisplay([])}>Clear</button> 
            }
          </div>
          {
            playerSearchDisplay.length > 0 ? (
              <div>
                Player's Found ({playerSearchDisplay.length} total): 
                {
                  playerSearchDisplay.map( player => {
                    return (
                      <div class="card w-75">
                        <div class="card-body">
                          <p>{player.email}</p>
                          <form onSubmit={handleAddPlayerSubmit} >
                            <input type="hidden" name="playerId" value={player._id} />
                            <button type="sumbit">Add New Player to Team</button>
                          </form>
                        </div>
                      </div>
                    )
                  } )
                }
              </div>
            ) : <div>No Players Found ({playersSelector.length} Players in League) </div>
          }
        </div>
      ) : (
        <div>
          <button onClick={loadPlayers}>Add Player's To Team</button>
        </div>
      )
    }


    </div>
  )
}

export default Team
