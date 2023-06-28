import React, { useState } from 'react';
import { Routes, Route } from "react-router-dom";
import '../App.css';
import Login from './Login';
import Signup from './Signup';
import Home from './Home';
import BlankPage from './BlankPage';


//! MAKE A VERSION OF TOAST POS? SERVER LOGS EMPLOYEE TIME.

function App() {

  let user = {name: 'john'}

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