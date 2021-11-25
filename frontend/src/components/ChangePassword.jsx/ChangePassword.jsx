import React, {useState} from 'react'
import { Fab } from '@material-ui/core';
import { EditIcon } from '@material-ui/icons';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import VisibilityIcon from '@mui/icons-material/Visibility';
import { changePassword } from '../../services/users';


function ChangePassword(props) {

  const [currentPassword, setCurrentPassword] = useState('')
  const [newPassword, setNewPassword] = useState('')
  const [newPasswordCheck, setNewPasswordCheck] = useState('')
  const [hidePassword, setHidePassword] = useState(true);

  const handleCurrentPasswordChange = (e) => {
    setCurrentPassword(e.target.value)
  }

  const handleNewPasswordChange = (e) => {
    setNewPassword(e.target.value)
  }

  const handleNewPasswordCheckChange = (e) => {
    setNewPasswordCheck(e.target.value)
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(currentPassword)
    console.log(newPassword)
    console.log(newPasswordCheck)
    console.log(props.user._id)
    const data = await changePassword(props.user._id, newPassword);
    console.log(data)
  }

  return (
    <div>
      <Fab onClick={() => setHidePassword(!hidePassword)} color={hidePassword ? "primary" : "inherit"} aria-label="edit">
        {hidePassword ? <VisibilityIcon /> : <VisibilityOffIcon />}
      </Fab>
      <form onSubmit={handleSubmit}>
        <div class="form-group">
          <label class="form-check-label" for="currentPassword">Current Password</label>
          <input type={hidePassword ? "password" : "text"} onChange={handleCurrentPasswordChange}  value={currentPassword} class="form-check-input" name="currentPassword"/>
        </div>
        <div class="form-group">
          <label class="form-check-label" for="NewPassword">New Password</label>
          <input type={hidePassword ? "password" : "text"} onChange={handleNewPasswordChange}  value={newPassword} class="form-check-input" name="currentPassword"/>
        </div>
        <div class="form-group">
          <label class="form-check-label" for="NewPasswordCheck">Re-Type New Password</label>
          <input type={hidePassword ? "password" : "text"} onChange={handleNewPasswordCheckChange}  value={newPasswordCheck} class="form-check-input" name="currentPassword"/>
        </div>
        <button type="submit" class="btn btn-primary">Update Password</button>
      </form>
    </div>
  )
}

export default ChangePassword
