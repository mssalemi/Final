import React from 'react'
import axios, { Axios } from 'axios';

export function getLeagues(){
  return axios.get("http://localhost:4000/leagues");
}

export function getLeague(id){
  return axios.get(`http://localhost:4000/league/${id}`);
}