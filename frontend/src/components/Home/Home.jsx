import React, { useState } from 'react'
import Avatar from '@material-ui/core/Avatar';
import { makeStyles } from '@material-ui/core/styles';
import { blue, deepOrange, deepPurple } from '@material-ui/core/colors';
import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import { breakpoints } from '@mui/system';
import {Navigate} from 'react-router-dom'
import MyLeagues from './MyLeagues/MyLeagues'
import MyTeams from './MyTeams/MyTeams';
import './Home.css'

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    '& > *': {
      margin: theme.spacing(1),
    },
  },
  orange: {
    color: theme.palette.getContrastText(deepOrange[500]),
    backgroundColor: deepOrange[500],
  },
  purple: {
    color: theme.palette.getContrastText(deepPurple[500]),
    backgroundColor: deepPurple[500],
  },
  avatar: {
    backgroundColor: blue[100],
    color: blue[600],
  },
}));

function Home(props) {
  const [yourLeagues, setYourLeagues] = useState('')
  console.log("user isssssss")
  console.log(props.user)


  const classes = useStyles();
  const [anchorEl, setAnchorEl] = React.useState(null);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  // Conditional Menu Dispaly
  const [leagues, setLeagues] = useState(false)
  const [teams, setTeams] = useState(false)
  const [user, setUser] = useState(false)
  const [changePassword, setChangePassword] = useState(false)
  const [logout, setLogout] = useState(false)

  const closeAll = () => {
    setLeagues(false)
    setTeams(false)
    setUser(false)
    setChangePassword(false)
  }

  const handleClose = (e) => {
    setAnchorEl(null);
    closeAll();
    switch(e.target.innerText) {
      case 'Your Leagues':
        console.log("Leagues SELECTED")
        setLeagues(true)
        break;
      case 'Your Teams':
        console.log("Teams SELECTED")
        setTeams(true)
        break;
      case 'User Info':
        console.log("info selected")
        setUser(true)
        break;
      case 'Logout':
        console.log("Logout SELECTED")
        break;
      default:
        console.log("Defualt Case")
    }
  };

  const loggout = () => {
    props.setUser(null)
    localStorage.removeItem('user');
  }

  return (
  <>
    <div className="home-container">

      <div class="card">
        <div class="card-body">
          <Avatar className={classes.purple}> { props.user.firstName[0] + props.user.lastName[0] } </Avatar>
          <div>Welcome, {props.user.firstName}!</div>
        </div>
      </div>
      
      <div className="user-controls">
        <Button variant="contained" color="primary" aria-controls="simple-menu" aria-haspopup="true" onClick={handleClick}>
          Open Menu
        </Button>
        <Menu id="simple-menu" anchorEl={anchorEl} keepMounted open={Boolean(anchorEl)} onClose={handleClose} >
          <MenuItem onClick={handleClose}>Your Leagues</MenuItem>
          <MenuItem onClick={handleClose}>Your Teams</MenuItem>
          <MenuItem onClick={loggout}>Logout</MenuItem>
        </Menu>
      </div>


      <div>
        {/* Conditional Stuff */}
        {
          leagues && <MyLeagues user={props.user} />
        }
        {
          teams && <MyTeams user={props.user}></MyTeams>
        }
      </div>
    </div>
    </>
  )
}

export default Home
