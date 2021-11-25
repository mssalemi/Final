import React from 'react'
import axios, { Axios } from 'axios';

export function getTeams() {
  return axios.get("http://localhost:4000/teams")
}

export function getTeam(id) {
  return axios.get(`http://localhost:4000/teams/${id}`)
}