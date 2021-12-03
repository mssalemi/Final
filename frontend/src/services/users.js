import React from 'react';
import axios, { Axios } from 'axios';

export function getUserData() {
  return axios.get('http://localhost:4000/users');
}

export function getOneUser(id) {
  console.log(`http://localhost:4000/users/${id}`);
  return axios.get(`http://localhost:4000/users/${id}`);
}

export function updateUser(user, firstName, lastName, theme) {
  const data = axios({
    method: 'post',
    url: `http://localhost:4000/users/${user._id}`,
    data: {
      firstName: firstName,
      lastName: lastName,
      type: 'player',
      img: 'img',
      theme: theme,
    },
  });
}

export function newUser(newUser) {
  const data = axios({
    method: 'post',
    url: `http://localhost:4000/users/create`,
    data: {
      email: newUser.email,
      firstName: newUser.firstName,
      lastName: newUser.lastName,
      type: newUser.type,
      password: newUser.password,
      img: 'img',
      theme: newUser.theme,
    },
  });
}

export function changePassword(userId, newPassword) {
  return axios({
    method: 'post',
    url: `http://localhost:4000/users/changepassword/${userId}`,
    data: { password: newPassword },
  });
}
