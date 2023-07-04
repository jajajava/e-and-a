import React, { useEffect, useState } from 'react';
import { Routes, Route, useNavigate } from "react-router-dom";
import '../App.css';
import Login from './Login';
import Signup from './Signup';
import Home from './Home';
import BlankPage from './BlankPage';

function App() {


  const [user, setUser] = useState('')
  const [isSignedIn, setIsSignedIn] = useState(false)
  const token = localStorage.getItem('jwt')
  const navigate = useNavigate()
  
  useEffect(()=> {token !== null? 
    fetch('http://127.0.0.1:3001/me', {
      method: 'GET',
      headers: {
        'Authorization': `Bearer ${token}`
      }
    })
    .then(res => res.json())
    .then(res => {setUser(res); setIsSignedIn(true)})
    : setIsSignedIn(false)}, [isSignedIn])

    function handleSignout(){
      localStorage.removeItem('jwt')
      setUser({})
      setIsSignedIn(false)
      navigate('/')
    }

  return (
    <div className="App">
      
      <Context.Provider value={user}>
      <Routes>
        <Route path='/' element={<Login />} />
        <Route path='/login' element={<Login setUser={setUser} setIsSignedIn={setIsSignedIn}/>} />
        <Route path='/signup' element={<Signup />} />
        <Route path='/home' element={<Home handleSignout={handleSignout}/>} />
        <Route path='*' element={<BlankPage/>} />
      </Routes>
      </Context.Provider>
      
    </div>
  );
}

export default App;
export const Context = React.createContext()