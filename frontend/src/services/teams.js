import React from 'react'
import axios, { Axios } from 'axios';

export function getTeams() {
  return axios.get("http://localhost:4000/teams")
}

export function getTeam(id) {
  return axios.get(`http://localhost:4000/teams/${id}`)
}

export function createTeam(name) {
  return axios({
    method: 'post',
    url: `http://localhost:4000/teams/create`,
    data: { name }
  })
}

/* 

export function newUser(newUser) {
  const data = axios({
    method: 'post',
    url: `http://localhost:4000/teams/create`,
    data: {
      email: newUser.email,
      firstName: newUser.firstName,
      lastName: newUser.lastName,
      type: newUser.type,
      password: newUser.password,
      img: "img",
      theme:  newUser.theme
    }
  });
}

*/