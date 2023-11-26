import React, { useEffect, useState } from "react";
import { Routes, Route, useNavigate } from "react-router-dom";
import "../App.css";
import Login from "./Login";
import KitchenDisplay from "./KitchenDisplay";
import BlankPage from "./BlankPage";
import TimePage from "./TimePage";
import OrderPage from "./OrderPage";

// This component obtains the user data when user logs in, defines routes, connects the CSS file, and creates the React useContext
function App() {

  const [user, setUser] = useState("")
  const [isSignedIn, setIsSignedIn] = useState(false)
  const navigate = useNavigate()
  
  useEffect(()=> {
    const token = localStorage.getItem("jwt") 
    token !== null? 
    fetch("http://127.0.0.1:3001/me", {
      method: "GET",
      headers: {
        "Authorization": `Bearer ${token}`
      }
    })
    .then(res => res.json())
    .then(res => {setUser(res); setIsSignedIn(true)})
    : setIsSignedIn(false)}, [isSignedIn])

    function handleSignout(){
      localStorage.removeItem("jwt")
      setUser({})
      setIsSignedIn(false)
    }

    function toHomepage(){
      handleSignout()
      navigate('/')
    }

    // This array has all the useContext values! I didn't want to overcrowd the context provider's value at the bottom
    const useContextArray={
      user, 
      toHomepage,
      setUser,
      setIsSignedIn,
      handleSignout
    }

    let routeArray
    // Routes that exist if the user is signed AND clocked in
    if (isSignedIn === true && user.is_clocked_in === true){
      routeArray = [
        <Route path="/timeclock" element={<TimePage/>}/>,
        <Route path="/" element={<OrderPage/>}/>, 
        <Route path="/home" element={<OrderPage/>}/>,
        <Route path="/orderpage" element={<OrderPage/>} />,
        <Route path="/kitchen" element={<KitchenDisplay/>} />
      ]
    // Routes that exist if the user is only signed in
    } else if (isSignedIn === true && user.is_clocked_in === false){
      routeArray = [
        <Route path="/" element={<Login/>}/>, 
        <Route path="/home" element={<Login/>}/>,
        <Route path="/timeclock" element={<TimePage/>}/>
      ]
    }
    // Defines the path for * depending on user state
    let routeElement
    if (isSignedIn && user.is_clocked_in) {
      routeElement = <BlankPage/>;
    } else if (isSignedIn && user.is_clocked_in === false) {
      routeElement = <TimePage/>;
    } else {
      routeElement = <Login/>;
    }

    console.log(user)
    console.log(isSignedIn)

  return (
    <div className="App">
      
      <Context.Provider value={useContextArray}>
       <Routes>
        {routeArray}
        <Route path="*" element={routeElement} />
       </Routes>
      </Context.Provider>
      
    </div>
  );
}

export default App;
export const Context = React.createContext()