import React, { useContext, useState } from "react";
import { Context } from "./App";
import { useNavigate } from "react-router-dom";

// This component is for the page where you clock in. It also handles the calculation logic to show how many hours the worker was clocked in
function TimePage() {
  const {user, handleSignout} = useContext(Context); //This is called destructuring an object. Assigns a variable of the same name the corresponding data in the object
  const navigate = useNavigate();
  const [clockedIn, setClockedIn] = useState(user.is_clocked_in);
  const [timeIn, setTimeIn] = useState(user.time_in || 0); // Initialize timeIn based on user's time_in, or 0 if not available
  const [hours, setHours] = useState(user.hours_worked || 0); // Initialize hours from user data, or 0 if not available

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
    } else {
      const timeOut = date.toISOString();
      const elapsedTime = (Date.parse(timeOut) - Date.parse(timeIn)) / (1000 * 60 * 60);
      const updatedHours = parseFloat(hours) + elapsedTime; // Convert hours to a number here
      console.log(updatedHours)
      variableBody = {
        time_in: null,
        is_clocked_in: false,
        hours_worked: parseFloat(updatedHours.toFixed(6)),
      };
      setHours(updatedHours);
      setTimeIn(null);
    }

    fetch(`http://127.0.0.1:3001/users/${user.id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${localStorage.getItem("jwt")}`,
      },
      body: JSON.stringify(variableBody),
    })
      .then((res) => res.json())
      .then((data) => {
        setClockedIn(!clockedIn);
        console.log(data);
      })
      .catch((error) => {
        console.error(error);
      })
  }

  function toHomePage() {
    if (!clockedIn) {
      handleSignout();
      navigate("/login");
    } else {
      navigate("/");
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