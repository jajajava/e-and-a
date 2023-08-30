import React, { useContext, useState } from "react";
import { Context } from "./App";
import { useNavigate } from "react-router-dom";

function TimePage({ handleSignout }) {
  const user = useContext(Context);
  const navigate = useNavigate();
  const [clockedIn, setClockedIn] = useState(user.is_clocked_in);
  const [timeIn, setTimeIn] = useState(null)

  function handleClocking(e) {
    e.preventDefault();
    const date = new Date();
    let variableBody;

    if (clockedIn === false) {
      variableBody = {
        time_in: date.toISOString(),
        is_clocked_in: true,
      };
    setTimeIn(variableBody.time_in)
    } else {
    let hours = user.hours_worked + ((Date.parse(new Date()) - Date.parse(timeIn))/(1000 * 60 * 60))
      variableBody = {
        time_in: null,
        is_clocked_in: false,
        hours_worked: parseFloat(hours.toFixed(2))
      };
      setTimeIn(variableBody.hours_worked)
      console.log(hours)
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
      });
  }

  function toHomePage() {
    if (!clockedIn) {
      handleSignout();
      navigate("/login");
    } else {
      navigate("/home");
    }
  }

  return (
    <div>
      <form onSubmit={handleClocking}>
        <button>{clockedIn === true ? "Clock out" : "Clock in"}</button>
      </form>
      <button onClick={toHomePage}>Home</button>
    </div>
  );
}

export default TimePage;

//! Fix this page's CSS and add more features
//! Issue with the logic that updates the user.hours_worked