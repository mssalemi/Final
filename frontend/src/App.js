import './App.css';
import React, {useState, useEffect} from 'react';
import Loggin from './pages/Loggin/Loggin';

import {Button} from '@material-ui/core'; 

function App() {

  const [user, setUser] = useState(null)

  return (
    <div className="App">
      {
        (user) ? <h1>Logged In</h1> : <Loggin user={user} setUser={setUser}/>
      }
    </div>
  );
}

export default App;
