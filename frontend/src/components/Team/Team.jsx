import React, { useState, useEffect } from 'react'
import {useParams} from "react-router-dom";
import { getTeam } from '../../services/teams';

function Team() {

  const { id } = useParams();
  const [team, setTeam] = useState(null)

  useEffect(async () => {
    console.log(id)
    const {data} = await getTeam(id)
    console.log(data)
    setTeam(data)
  }, [])

  return (
    <div>
    {      
      team ? (
        <div>
          <h1>{team.name}</h1>
          <h3>rest of details go here</h3>
        </div>
      ) : <div>....loading</div>
    }
    </div>
  )
}

export default Team
