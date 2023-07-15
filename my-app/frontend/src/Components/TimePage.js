import React, { useContext } from "react";
import { Context } from "./App";

function TimePage(){
    let user = useContext(Context)
    const token = localStorage.getItem('jwt')
    let date = new Date()

    function handleClocking(e){
        e.preventDefault()
        fetch(`http://127.0.0.1:3001/users/${user.id}`, {
        method: 'PATCH',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`
        },
        body: JSON.stringify({
            time_in: date.toISOString()
        })
        })
        .then(res => res.json())
        .then(data => {
            console.log(data);
        })
        .catch(error => {
            console.error(error);
        });
    }

    return (
        <div>
            <form onSubmit={handleClocking}>
                <button>{user.time_in !== null ? "Clock out" : "Clock in"}</button>
            </form>
        </div>
    )
}

export default TimePage