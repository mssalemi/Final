import React, {useState, useEffect} from 'react'
import { newUser } from '../../services/users';

function CreateProfile() {
  const [email, setEmail] = useState('');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [password, setPassword] = useState('');
  const [passwordCheck, setPasswordCheck] = useState('');
  const TYPE = 'player';
  const THEME = 'light';

  const handleEmailChange = (e) => {
    setEmail(e.target.value)
  }

  const handleFirstNameChange = (e) => {
    setFirstName(e.target.value)
  }

  const handleLastNameChange = (e) => {
    setLastName(e.target.value)
  }

  const handlePasswordChange = (e) => {
    setPassword(e.target.value)
  }

  const handlePasswordCheckChange = (e) => {
    setPasswordCheck(e.target.value)
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData= {
      email: e.target.email.value,
      firstName: e.target.firstName.value,
      lastName: e.target.lastName.value,
      password: e.target.password.value,
      type: TYPE,
      theme: THEME
    }
    console.log(e.target.email.value)
    console.log(e.target.firstName.value)
    console.log(e.target.lastName.value)
    console.log(e.target.password.value)
    console.log(e.target.passwordCheck.value)
    console.log(TYPE)
    console.log(THEME)
    await newUser(formData)

  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div class="form-group">
          <label for="email">Email address</label>
          <input type="email" onChange={handleEmailChange} value={email} class="form-control" name="email" aria-describedby="emailHelp" placeholder="Enter email" />
          <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
        </div>
        <div class="form-group">
          <label for="firstName">First Name</label>
          <input type="text" name="firstName" onChange={handleFirstNameChange}  value={firstName} class="form-control" placeholder="Mehdi" />
        </div>
        <div class="form-group">
          <label for="lastName">Last Name</label>
          <input type="text" name="lastName" onChange={handleLastNameChange} value={lastName} class="form-control" placeholder="Salemi" />
        </div>
        <div class="form-group">
          <label class="form-check-label" for="password">Password</label>
          <input type="password" onChange={handlePasswordChange}  value={password} class="form-check-input" name="password"/>
        </div>
        <div class="form-group">
          <label class="form-check-label" for="passwordCheck">Re-Type Password</label>
          <input type="password" onChange={handlePasswordCheckChange} value={passwordCheck} class="form-check-input" name="passwordCheck"/>
        </div>
        <div class="form-group">
          <label for="type">Type</label>
          <select name="type" class="form-control" value="player">
            <option value={TYPE} selected>Player</option>
          </select>
        </div>
        <button type="submit" class="btn btn-primary">Submit</button>
      </form>
    </div>
  )
}

export default CreateProfile
