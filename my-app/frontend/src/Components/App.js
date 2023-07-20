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
    }

    function toHomepage(){
      handleSignout()
      navigate('/')
    }

    console.log(user)

  return (
    <div className="App">
      
      <Context.Provider value={user}>
      <Routes>
      {isSignedIn && user.is_clocked_in ? 
          [
          <Route path='/timeclock' element={<TimePage/>}/>,
          <Route path='/' element={<Home toHomepage={toHomepage}/>}/>, 
          <Route path='/home' element={<Home toHomepage={toHomepage}/>}/>,
          <Route path='*' element={<BlankPage />}/>
          ] : (
            isSignedIn && !user.is_clocked_in ? 
            [
            <Route path='/' element={<Login setUser={setUser} setIsSignedIn={setIsSignedIn} handleSignout={handleSignout}/>}/>, 
            <Route path='/home' element={<Login setUser={setUser} setIsSignedIn={setIsSignedIn} handleSignout={handleSignout}/>}/>,
            <Route path='/timeclock' element={<TimePage/>}/>,
            <Route path='*' element={<TimePage/>}/>
          ] : [<Route path='*' element={<Login setUser={setUser} setIsSignedIn={setIsSignedIn} handleSignout={handleSignout}/>}/>]
          )
        }
      </Routes>
      </Context.Provider>
      
    </div>
  );
}

export default App;
export const Context = React.createContext()