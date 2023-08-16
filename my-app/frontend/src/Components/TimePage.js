import React, { useContext, useEffect, useState } from "react";
import { Context } from "./App";
import { useNavigate } from "react-router-dom";

function TimePage({handleSignout}) {
    let user = useContext(Context);
    const navigate = useNavigate()
    const [clockedIn, setClockedIn] = useState(user.is_clocked_in);
    let date = new Date();

    useEffect(() => {
        setClockedIn(user.is_clocked_in);
    }, [user.is_clocked_in]);

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

    function toHomePage(){
        if (!clockedIn){
        handleSignout()
        navigate('/login')
        } else {
        navigate('/home')
        }
    }

    return (
    <div>
        <form onSubmit={handleClocking}>
        <button>{clockedIn === true ? 'Clock out' : 'Clock in'}</button>
        </form>
        <button onClick={toHomePage}>Home</button>
    </div>
    );
  }

export default TimePage

//! Fix this page's CSS and add more features