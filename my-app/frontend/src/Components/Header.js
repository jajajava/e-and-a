import React, { useContext } from "react";
import { Context } from "./App";
import { useNavigate } from "react-router-dom";

// This component is the header; it should be the same on all pages, and only accessible when the user is signed in.
function Header({toHomepage}) {

    let user = useContext(Context)
    let navigate = useNavigate()

    function handleClocking(){
        navigate('/timeclock')
    }

    function newOrder(){
        navigate('/orderpage')
    }



    return (
        <header className='header'>
            <h1 className="logo">🥐 toasty </h1>
            <h1 className="greeting">Welcome, {user.name}.</h1>
            <div className="nav-bar">
                <h3 className="nav-link" onClick={handleClocking}>Time Clock</h3>
                <h3 className="nav-link" onClick={newOrder}>Start a new order</h3>
                <h3 className="nav-link" onClick={toHomepage}>Switch users</h3>
            </div>

        </header>
    )
}

export default Header