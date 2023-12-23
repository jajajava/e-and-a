import React, { useContext, useEffect, useState } from "react";
import { Context } from "./App";
import { useNavigate } from "react-router-dom";

// This component is the header; it should be the same on all pages, and only shown when the user is signed in.
function Header() {
    const {toHomepage, user} = useContext(Context)
    const [decision, setDecision] = useState("Make Order")

    let navigate = useNavigate()

    function newOrder(){
        navigate('/')
    }

    useEffect(()=> {
        decideTabsOrNot()
    }, [])

    function decideTabsOrNot(){
        if (window.location.href.endsWith("/tabs")){
            setDecision("Make Order")
        } else {
            setDecision("See Tabs")
        }
    }

    function handleConditionalRouting(){
        if (decision === "Make Order"){
            navigate('/')
        } else {
            navigate('/tabs')
        }
    }

    function handleClocking(){
        navigate('/timeclock')
    }

    function toKitchenDisplay(){
        navigate('/kitchen')
    }


    return (
        <header className='header'>
            <h1 className="logo" onClick={newOrder}>🥐 toasty </h1>
            <h1 className="greeting">Welcome, {user.name}.</h1>
            <div className="nav-bar">
                {/* If current page === /tabs, it's "make order", else /tabs */}
                <h3 className="nav-link" onClick={handleConditionalRouting}>{decision}</h3>
                <h3 className="nav-link" onClick={handleClocking}>Time Clock</h3>
                <h3 className="nav-link" onClick={toKitchenDisplay}>Kitchen display</h3>
                <h3 className="nav-link" onClick={toHomepage}>Switch users</h3>
            </div>

        </header>
    )
}

export default Header