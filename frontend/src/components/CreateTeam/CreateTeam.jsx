import React, {useState} from 'react'
import { TextField,Button } from '@material-ui/core'
import { createTeam } from '../../services/teams'

function CreateTeam() {

  const [name, setName] = useState('');
  
  const handleNameChange = (e) => {
    setName(e.target.value)
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("creating a team \n TEAM NAME = " + name)
    // TODO: add form valildation here
    const {data} = await createTeam(name)
    console.log(data)
  }

  return (
    <div>
      <form onSubmit={handleSubmit} noValidate autoComplete="off">
        <TextField size="large" id="filled-basic" label="Enter Team Name" placeholder="PSG" onChange={handleNameChange} value={name} name="name" />
        <Button type="submit" variant="contained" color="primary"> Create New Team </Button>
      </form>
    </div>
  )
}

export default CreateTeam
