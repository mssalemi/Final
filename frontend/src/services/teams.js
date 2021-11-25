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

export function addPlayerToTeam(playerId, teamId) {
  console.log("Adding Player to Team")
  console.log(`PLAYER ID = ${playerId}`)
  console.log(`TEAM ID = ${teamId}`)
  return axios({
    method: 'post',
    url: `http://localhost:4000/teams/${teamId}/addPlayer`,
    data: { playerId }
  })
}