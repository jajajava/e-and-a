import React, { useContext, useState } from "react";
import { Context } from "./App";

function TimePage() {
    let user = useContext(Context);
    const [clockedIn, setClockedIn] = useState(user.is_clocked_in);
    let date = new Date();

    let variableBody;
    if (clockedIn === false) {
    variableBody = {
        time_in: date.toISOString(),
        is_clocked_in: true
    };
    } else {
    variableBody = {
        time_in: null,
        is_clocked_in: false
    };
    }

    function handleClocking(e) {
    e.preventDefault();
    fetch(`http://127.0.0.1:3001/users/${user.id}`, {
        method: 'PATCH',
        headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${localStorage.getItem('jwt')}`
        },
        body: JSON.stringify(variableBody)
    })
        .then(res => res.json())
        .then(data => {
        setClockedIn(!clockedIn);
        console.log(data);
        })
        .catch(error => {
        console.error(error);
        });
    }

    return (
    <div>
        <form onSubmit={handleClocking}>
        <button>{clockedIn === true ? 'Clock out' : 'Clock in'}</button>
        </form>
    </div>
    );
  }

export default TimePage

//! Fix this page's CSS and add more features