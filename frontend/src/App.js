import './App.css';
import React, { useState, useEffect } from 'react';
import { Route, Switch } from 'react-router-dom';

import Loggin from './pages/Loggin/Loggin';
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';
import Main from './pages/Main/Main';

import { getOneUser } from './services/users';

import { Button } from '@material-ui/core';

function App() {
  const [user, setUser] = useState(null);

  const authenticate = () => {
    localStorage.setItem('user', JSON.stringify(user));
  };

  const refreshUser = async () => {
    const { data } = await getOneUser();
    console.log(data);
  };

  useEffect(async () => {
    if (localStorage.getItem('user')) {
      const user = JSON.parse(localStorage.getItem('user'));
      setUser(user);
    } else {
      console.log('NO USER DETECTED HERE');
    }
  }, []);

  useEffect(() => {
    console.log(user);
  }, [user]);

  return (
    <>
      <div className="page-container">
        <Navbar user={user} />

        {user ? (
          <Main authenticate={authenticate} user={user} setUser={setUser} />
        ) : (
          <Loggin user={user} setUser={setUser} />
        )}

        <Footer user={user} />
      </div>
    </>
  );
}

export default App;
