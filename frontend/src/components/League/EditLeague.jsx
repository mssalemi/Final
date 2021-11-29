import React, {useState, useEffect} from 'react'
import {useParams} from "react-router-dom";
import {getLeagues, editLeague} from '../../services/leagues'

// TODO 
function EditLeague(props) {

  const [name, setName] = useState("")

  const { id } = useParams();

  useEffect(async () => {
    const {data} = await getLeagues();
    setName(data.filter(league => league._id === id)[0].name)
  }, [])

  const handleSubmit = async (e) => {
    const data = await editLeague(id, name);
    console.log(data)
  }

  return (
    <div>
      {
        name ? <>
          <input type="text" name="name" value={name} onChange={(e) => setName(e.target.value)}></input>
          <button onClick={handleSubmit} >Edit League Name</button>
        </> : <>
          ... loading
        </>
      }
    </div>
  )
}

export default EditLeague
