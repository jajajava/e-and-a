import React, { useEffect, useState } from 'react';
import { Routes, Route } from "react-router-dom";
import '../App.css';
import Login from './Login';
import Signup from './Signup';
import Home from './Home';
import BlankPage from './BlankPage';

function App() {

  const [user, setUser] = useState([])


  useEffect(() => {
    fetch('http://127.0.0.1:3001/me', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json'
      }
    })
      .then(res => res.json())
      .then(data => {setUser(data)
      })
      .catch(error => {
        console.error(error);
      })
  }, [])
  // let user = {name: 'john'}

  return (
    <div className="App">
      
      <Context.Provider value={user}>
      <Routes>
        <Route path='/' element={<Login />} />
        <Route path='/login' element={<Login />} />
        <Route path='/signup' element={<Signup />} />
        <Route path='/home' element={<Home />} />
        <Route path='*' element={<BlankPage/>} />
      </Routes>
      </Context.Provider>
      
    </div>
  );
}

export default App;
export const Context = React.createContext()