import React from 'react'
import axios from 'axios'

function getUserData() {
  return axios.get("http://localhost:4000/users")
}

export default getUserData
