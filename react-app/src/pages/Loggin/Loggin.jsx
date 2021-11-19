import React, { useState, useEffect } from 'react'
import './Loggin.css'

import {Container, LinearProgress, TextField, Button, Checkbox, CircularProgress } from '@material-ui/core'; 
import SaveIcon from '@material-ui/icons/Save'
import LockIcon from '@material-ui/icons/Lock'
import LockOpenIcon from '@material-ui/icons/LockOpen'

import axios from 'axios';
import getUserData from '../../services/getUserData';


function Loggin() {

  const [users, setUsers] = useState([])
  const [usersLoading, setUsersLoading] = useState(true)

  const [email, setEmail] = useState("")
  const [emailComplete, setEmailComplete] = useState(false)

  const [password, setPassword] = useState("")
  const [passwordComplete, setPasswordComplete] = useState(false)

  const [successMessage, setSuccessMessage] = useState('Logging User In')

  useEffect(async() => {
    const {data} = await getUserData()
    setUsers(data)
    setUsersLoading(false)
  }, [])

  useEffect(() => {
    if ( users.filter(user => user.email === email).length > 0) {
      console.log("match found")
      setEmailComplete(true)
    } else {
      console.log("not quite")
      setEmailComplete(false)
    }  
  }, [email])

  useEffect(() => {
    const user = users.filter( user => {
      return user.password === password && user.email === email
    })
    console.log(user)
    if (user.length > 0) {
      setPasswordComplete(true)
      console.log("user authenticated")
      fakeAuthentication()
    } else {
      setPasswordComplete(false)
    }
  }, [password])

  const handleEmailChange = (e) => {
    setEmail(e.target.value)
  }

  const handlePasswordChange = (e) => {
    setPassword(e.target.value)
  }

  function fakeAuthentication () {
    setTimeout(() => {
      setSuccessMessage("\tAuthenticating")
      setTimeout(() => {
        setSuccessMessage("\tReally Authenticating")
        setTimeout(() => {
          setSuccessMessage("\tLoggin Success")
        }, 1500)
      }, 1500)
    }, 1500)
  }

  return (
    <>

    {
      usersLoading ? "Connecting to users of oneleague" : "Bye"
    }

    <Container maxWidth="sm">
      <TextField 
      value={email} 
      onChange={handleEmailChange}
      id="outlined-basic" 
      label="Email" 
      variant="outlined" 
      style={{
        width: 500
      }}
      />
      <Checkbox
        color="inherit"
        checked={emailComplete}
      ></Checkbox>
      <br></br>
      <TextField 
        onChange={handlePasswordChange}
        value={password}
        id="outlined-basic" 
        label= { emailComplete ? "Enter your password" : "ENTER VALID EMAIL" } 
        variant="filled" 
        style={{
          width: 500
        }}
        disabled={!emailComplete}
      />
      {
        passwordComplete ? <LockOpenIcon /> : <LockIcon />
      }
      <LinearProgress style={{height: 20}} variant="determinate" value={ !emailComplete ? 0 : passwordComplete ? 100 : 50  } color="primary" />

      {
        passwordComplete && <>
        <Button
            variant="contained"
            color="primary"
            style={{
              opacity: .5
            }}
          > <CircularProgress color="inherit" />   {successMessage}  </Button></>
      }
    </Container>
    </>
  )
}

export default Loggin
