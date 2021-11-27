import './App.css';
import React, {useState, useEffect} from 'react';
import {Route, Switch} from 'react-router-dom';

import Loggin from './pages/Loggin/Loggin';
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';
import Main from './pages/Main/Main'

import {Button} from '@material-ui/core'; 

function App() {

  const [user, setUser] = useState(null)

  return (
    <div className="page-container">
      <Navbar />
      
        {
          (user) ? <Main user={user[0]} /> : <Loggin user={user} setUser={setUser}/>
        }
      
      <Footer />
    </div>

  );
}

export default App;
