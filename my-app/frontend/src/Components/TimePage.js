import React, { useContext, useState } from "react";
import { Context } from "./App";
import { useNavigate } from "react-router-dom";


// This component is for the page where you clock in. It also handles the calculation logic to show how many hours the worker was clocked in
function TimePage() {
  const {user, handleSignout, handleSignIn} = useContext(Context); //This is called destructuring an object. Assigns a variable of the same name the corresponding data in the object
  const [timeIn, setTimeIn] = useState(user.time_in || 0); // Initialize timeIn based on user's time_in, or 0 if not available
  const [hours, setHours] = useState(user.hours_worked || 0); // Initialize hours from user data, or 0 if not available
  const [clockedIn, setClockedIn] = useState(user.is_clocked_in); // This cannot be passed down because it causes bugs. Keep it in this file!
  const navigate = useNavigate();

  function handleClocking(e) {
    e.preventDefault();

    const date = new Date();
    let variableBody;

    if (clockedIn === false) {
      variableBody = {
        time_in: date.toISOString(),
        is_clocked_in: true,
      };
      setTimeIn(variableBody.time_in);
      handleSignIn();
    } else {
      const timeOut = date.toISOString();
      const elapsedTime = (Date.parse(timeOut) - Date.parse(timeIn)) / (1000 * 60 * 60);
      const updatedHours = parseFloat(hours) + elapsedTime; // Convert hours to a number here
      variableBody = {
        time_in: null,
        is_clocked_in: false,
        hours_worked: parseFloat(updatedHours.toFixed(6)),
      };
      setHours(updatedHours);
      setTimeIn(null);
      setClockedIn(false);
    }

    // PATCH body (variableBody) signs the user both in/out in the backend)
    fetch(`http://127.0.0.1:3001/users/${user.id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${localStorage.getItem("jwt")}`,
      },
      body: JSON.stringify(variableBody),
    })
    // COMMENTED PART IS FOR TESTING PURPOSES, TO CHECK IF CLOCKING STATE IS UPDATED IN BACKEND
    // .then(res => res.json())
    // .then(res => console.log(res))
  }

  function toHomePage() {
    navigate('/')
    if (clockedIn === false){
      handleSignout()
    }
  }

  let truncatedHours = Math.trunc(hours * 100) / 100.0
  
    return (
      <div>
        <form onSubmit={handleClocking}>
          <button>{clockedIn === true ? "Clock out" : "Clock in"}</button>
        </form>
        <button onClick={toHomePage}>Home</button>
        <p>Hours Worked: {truncatedHours}</p>
      </div>
    );
  }

export default TimePage;

//! Fix this page's CSS and add more features