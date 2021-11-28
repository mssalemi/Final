import React, {useState} from 'react'
import {createLeague} from '../../services/leagues'

function CreateLeague() {

  const [name, setName] = useState('')

  const handleNameChange = (e) => {
    setName(e.target.value)
  }

  const handleSubmit = async(e) => {
    const data = await createLeague(name);
    console.log(data);
  }

  return (
    <div>
      <h1>Create League</h1>
      <input onChange={handleNameChange} value={name} class="form-control form-control-lg" type="text" placeholder="New Team Name"></input>
      <button onClick={handleSubmit}>Add New Team</button>
    </div>
  )
}

export default CreateLeague
