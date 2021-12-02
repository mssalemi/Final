import React, { useState, useEffect } from 'react'
import './Loggin.css'

import {Grid, LinearProgress, TextField, Button, Checkbox, CircularProgress } from '@material-ui/core'; 
import SaveIcon from '@material-ui/icons/Save'
import LockIcon from '@material-ui/icons/Lock'
import LockOpenIcon from '@material-ui/icons/LockOpen'

import axios from 'axios';
import {getUserData} from '../../services/users';


function Loggin(props) {

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

  useEffect( () => {
    console.log(users)
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

  const fakeAuthentication = () => {
    // setTimeout(() => {
    //   setSuccessMessage("\tAuthenticating")
    //   setTimeout(() => {
    //     setSuccessMessage("\tReally Authenticating")
    //     setTimeout(() => {
    //       setSuccessMessage("\tLoggin Success")
    //       const authenticatedUser = users.filter(user => user.email == email)
    //       console.log(`Authenticated User is: ${authenticatedUser.email}`)
    //       props.setUser(authenticatedUser);
    //     }, 1500)
    //   }, 1500)
    // }, 1500)
    const authenticatedUser = users.filter(user => user.email == email)
    console.log(users)
    console.log(authenticatedUser)
    console.log(`Authenticated User is: ${authenticatedUser[0].email}`)
    props.setUser(authenticatedUser[0]);
  }

  return (
    <div>
    {
      usersLoading ? ".. connecting " : "Connected"
    }
      <Grid container spacing={2}>
        <Grid item xs={11}>
          <TextField 
            value={email} 
            onChange={handleEmailChange}
            id="outlined-basic" 
            label="Email" 
            variant="outlined" 
            style={{width: "100%"}}
            />
        </Grid>
        <Grid item xs={1} style={{display: "flex", justifyContent: "center", alignItems: "center"}}>
            <Checkbox
              checked={emailComplete}
              color="primary"
            ></Checkbox>
        </Grid>
        <Grid item xs={11}>
          <TextField 
            onChange={handlePasswordChange}
            value={password}
            id="outlined-basic" 
            label= { emailComplete ? "Enter your password" : "ENTER VALID EMAIL" } 
            variant="filled" 
            style={{width: "100%"}}
            disabled={!emailComplete}
          />
        </Grid>
        <Grid item xs={1} style={{display: "flex", justifyContent: "center", alignItems: "center"}} >
          <Checkbox
                checked={passwordComplete}
                color="primary"
          ></Checkbox>
        </Grid>
      {
        passwordComplete && <>
        <Grid style={{display: "flex", justifyContent: "center"}}>
        <Button
            variant="contained"
            color="primary"
            style={{ opacity: .5, width: "750px", display:"flex", justifyContent:"start"}}
          > <CircularProgress color="inherit" />   {successMessage}  </Button>
        </Grid>
        </>
      }
    </Grid>

    </div>
  )
}

export default Loggin
