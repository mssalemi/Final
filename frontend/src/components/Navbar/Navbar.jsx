import './Navbar.css'
import React, {useState} from 'react'
import {Link} from 'react-router-dom'
import { GiSoccerBall } from "react-icons/gi";
import {TextField} from '@material-ui/core'
import {getUserData} from '../../services/users'
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

function Navbar(props) {
  const [open, setOpen] = useState(false);
  const handleOpen = async (id) => {
    console.log(id)
    const user = userSearchResults.filter(user => user._id == id);
    console.log(user)
    await setUserModal(user[0])
    await setOpen(true)
  };
  const handleClose = () => setOpen(false);

  const [userSearch, setUserSearch] = useState('')
  const [show, setShow] = useState(false)
  const [userSearchResults, setUserSearchResults] = useState(null)

  const [userModal, setUserModal] = useState(null)

  const handleSearchChange = async (e) => {
    setUserSearch(e.target.value);
    const {data} = await getUserData();
    await setUserSearchResults(data.filter(user => user.firstName.toUpperCase().includes(userSearch.toUpperCase())))
    console.log(data)
  }

  return (
    <div className={`navbar ${ props.user ? props.user.theme == "Dark" ? "dark" :"light" : "light"} ` }>
      <>
      <Modal
          open={open}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box sx={style}>
            <Typography id="modal-modal-title" variant="h6" component="h2">
              {
                userModal && <div>
                  { userModal.firstName } { userModal.lastName } 
                </div>
              }
            </Typography>
            <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            {
              userModal && userModal.email
            }
            </Typography>
          </Box>
        </Modal>
      </>
      <div className="navbar-icon">
        <GiSoccerBall size={50} />
      </div>
      <div className="navbar-title">
        One League 
      </div>
      <div>
        <div className="navbar-search">
          <TextField id="filled-basic" label="Search" variant="filled"  onChange={handleSearchChange} value={userSearch}/>
        </div>
        <div onClick={() => setUserSearchResults(null)} className="navbar-search-display">
          { userSearchResults && <button onClick={() => setUserSearchResults(null)}>Close</button> }
          {
            userSearchResults && userSearchResults.map((user) => {
              return (
                  <div className="navbar-search-display-result">
                    <button class="btn btn-secondary" onClick={() => handleOpen(user._id)}>View {user.firstName} {user.lastName}</button> 
                  </div>
              )
            })
          }
        </div>
      </div>

    </div>
  )
}

export default Navbar
