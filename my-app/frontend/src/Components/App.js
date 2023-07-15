import React, { useEffect, useState } from 'react';
import { Routes, Route, useNavigate } from "react-router-dom";
import '../App.css';
import Login from './Login';
import Signup from './Signup';
import Home from './Home';
import BlankPage from './BlankPage';
import TimePage from './TimePage';

function App() {


  const [user, setUser] = useState('')
  const [isSignedIn, setIsSignedIn] = useState(false)
  const navigate = useNavigate()
  
  useEffect(()=> {
    const token = localStorage.getItem('jwt') 
    token!== null? 
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

    console.log(user)

  return (
    <div className="App">
      
      <Context.Provider value={user}>
      <Routes>
        {isSignedIn ? <Route path='/' element={<Home handleSignout={handleSignout}/>}/> : <Route path='/' element={<Login setUser={setUser} setIsSignedIn={setIsSignedIn}/>} />} {/* If the user is signed in, root directs you to /home; else, to /login */}
        {isSignedIn ? <Route path='/home' element={<Home handleSignout={handleSignout}/>}/> : <Route path='*' element={<BlankPage />}/>} If user is signed in, /home route available; else takes to BlankPage
        {isSignedIn ? <Route path='*' element={<BlankPage />}/> : <Route path='/' element={<Login setUser={setUser} setIsSignedIn={setIsSignedIn}/>}/>} {/* If user is not signed in, /login route available; else takes to BlankPage*/}
        {isSignedIn ? <Route path='/timeclock' element={<TimePage/>}/> : <Route path='/timeclock' element={<Login setIsSignedIn={setIsSignedIn} />}/>}
        <Route path='/signup' element={<Signup />} />
        <Route path='*' element={<BlankPage/>} />
      </Routes>
      </Context.Provider>
      
    </div>
  );
}

export default App;
export const Context = React.createContext()