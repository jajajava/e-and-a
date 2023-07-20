import React, { useContext } from "react";
import { Context } from "./App";
import { useNavigate } from "react-router-dom";

function Header({toHomepage}) {

    let user = useContext(Context)
    let navigate = useNavigate()

    function handleClocking(){
        navigate('/timeclock')
    }



    return (
        <header className='header'>
            <h1 className="logo">🥐 toasty </h1>
            <h1 className="greeting">Welcome, {user.name}.</h1>
            <div className="nav-bar">
                <h3 className="nav-link" onClick={handleClocking}>Time Clock</h3>
                <h3 className="nav-link">Start a new order</h3>
                <h3 className="nav-link" onClick={toHomepage}>Switch users</h3>
            </div>

        </header>
    )
}

export default Header