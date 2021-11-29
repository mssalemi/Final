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

  const classes = useStyles();
  const [anchorEl, setAnchorEl] = React.useState(null);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  // Conditional Menu Dispaly
  const [leagues, setLeagues] = useState(false)
  const [teams, setTeam] = useState(false)
  const [user, setUser] = useState(false)
  const [changePassword, setChangePassword] = useState(false)
  const [logout, setLogout] = useState(false)

  const closeAll = () => {
    setLeagues(false)
    setTeam(false)
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
        break;
      case 'User Info':
        console.log("info selected")
        break;
      case 'Change Password':
        console.log("Passowrd SELECTED")
        break;
      case 'Logout':
        console.log("Logout SELECTED")
        break;
      default:
        console.log("Defualt Case")
    }
  };

  return (
    <div>
      <Avatar className={classes.purple}> { props.user.firstName[0] + props.user.lastName[0] } </Avatar>
      Welcome, {props.user.firstName}!
      <div>
        <Button aria-controls="simple-menu" aria-haspopup="true" onClick={handleClick}>
          Open Menu
        </Button>
        <Menu
          id="simple-menu"
          anchorEl={anchorEl}
          keepMounted
          open={Boolean(anchorEl)}
          onClose={handleClose}
        >
          <MenuItem onClick={handleClose}>Your Leagues</MenuItem>
          <MenuItem onClick={handleClose}>Your Teams</MenuItem>
          <MenuItem onClick={handleClose}>User Info</MenuItem>
          <MenuItem onClick={handleClose}>Change Password</MenuItem>
          <MenuItem onClick={handleClose}>Logout</MenuItem>
        </Menu>
      </div>
      <div>
        {/* Conditional Stuff */}
        {
          leagues && <MyLeagues user={props.user} />
        }
      </div>
    </div>
  )
}

export default Home
