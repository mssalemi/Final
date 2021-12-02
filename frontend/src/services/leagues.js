import React from 'react';
import axios, { Axios } from 'axios';

export function getLeagues() {
  return axios.get('http://localhost:4000/leagues');
}

export function getLeague(id) {
  return axios.get(`http://localhost:4000/leagues/${id}`);
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
  console.log('did we get here part 2');
  return axios({
    method: 'post',
    url: `http://localhost:4000/leagues/${leagueId}/game`,
    data: { homeTeamId, awayTeamId },
  });
}

export function editLeague(id, name) {
  console.log('editting league');
}

export function getGame(gameId) {
  return axios.get(`http://localhost:4000/games/${gameId}`);
}

export function editGameScore(gameId, score) {
  return axios({
    method: 'post',
    url: `http://localhost:4000/games/${gameId}`,
    data: { score },
  });
}

export function editGameDate(gameId, date) {
  return axios({
    method: 'post',
    url: `http://localhost:4000/games/date/${gameId}`,
    data: { date },
  });
}
