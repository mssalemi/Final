import React from 'react';
import axios, { Axios } from 'axios';

export function getLeagues() {
  return axios.get('http://localhost:4000/leagues');
}

export function getLeague(id) {
  return axios.get(`http://localhost:4000/league/${id}`);
}

export function createLeague(name) {
  return axios({
    method: 'post',
    url: `http://localhost:4000/leagues/create`,
    data: { name },
  });
}

export function addTeam(leagueId, teamId) {
  return axios({
    method: 'post',
    url: `http://localhost:4000/leagues/addteam/${leagueId}`,
    data: { teamId },
  });
}

export function newGame(homeTeamId, awayTeamId, leagueId) {
  console.log('did we get here part 1');
  return axios({
    method: 'post',
    url: `http://localhost:4000/leagues/${leagueId}/game`,
    data: { homeTeamId, awayTeamId },
  });
}
