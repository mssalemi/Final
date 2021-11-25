import React, { useState, useEffect, useRef } from 'react'
import {TextField, Button} from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles';
import Icon from '@material-ui/core/Icon';
import SaveIcon from '@material-ui/icons/Save';
import { editTeam, getTeam } from '../../services/teams';
import {useParams, Navigate} from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  button: {
    margin: theme.spacing(1),
  },
}));

function EditTeam() {

  const { id } = useParams();

  const inputRef = useRef(null);

  const classes = useStyles();

  const [name, setName] = useState('.... loading');

  const [success, setSuccess] = useState(false)

  const handleNameChange = (e) => {
    setName(e.target.value);
  }

  useEffect(async ()=> {
    const {data} = await getTeam(id);
    setName(data.name)
  }, [])

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("editting team");
    const {data} = await editTeam(id, name);
    console.log(data)
    inputRef.current.focus()
    setSuccess(true)
  }

  return (
    <div>
      {
        success ? (
          <Navigate to={`/teams/${id}`} />
        ) : (
          <p>Fail</p>
        )
      }
      <h1>Edit Team</h1>
      <TextField ref={inputRef} onChange={handleNameChange} value={name} id="filled-basic" label="Team Name" variant="filled" />
      <Button
        variant="contained"
        color="primary"
        size="large"
        className={classes.button}
        startIcon={<SaveIcon />}
        onClick={handleSubmit}
      >
        Save
      </Button>
    </div>
  )
}

export default EditTeam
