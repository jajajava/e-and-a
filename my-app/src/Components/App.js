import '../App.css';
import { Routes, Route } from "react-router-dom";
import Login from './Login';
import Header from './Header';
import Signup from './Signup';

//! MAKE A VERSION OF TOAST POS? SERVER LOGS EMPLOYEE TIME.

function App() {

  return (
    <div className="App">

      <Routes>
        <Route path='/' element={<Login />} />
        <Route path='/login' element={<Login />} />
        <Route path='/signup' element={<Signup />} />
      </Routes>
    </div>
  );
}

export default App;