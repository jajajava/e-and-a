import React, { useContext, useEffect, useState } from "react";
import { Context } from "./App";
import { useLocation, useNavigate } from "react-router-dom";

// This component is the header; it should be the same on all pages, and only shown when the user is signed in.
function Header() {
    const {toHomepage, user} = useContext(Context)
    const [showTabs, setShowTabs] = useState(false)

    let navigate = useNavigate()
    let location = useLocation()

    function newOrder(){
        navigate('/')
    }

    useEffect(() => {
        if(location.pathname.endsWith("/tabs")){
            setShowTabs(false)
        } else {
            setShowTabs(true)
        }
    }, [location]);

    function handleConditionalRouting(){
        if (showTabs === false){
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
            <div id={showTabs === false ? "headerToHome" : "headerToTabs"} className="nav-bar">
                <h3 className="nav-link" onClick={handleConditionalRouting}>{showTabs === false ? "New Order" : "Show Tabs"}</h3>
                <h3 className="nav-link" onClick={handleClocking}>Time Clock</h3>
                <h3 className="nav-link" onClick={toKitchenDisplay}>Kitchen display</h3>
                <h3 className="nav-link" onClick={toHomepage}>Switch users</h3>
            </div>

        </header>
    )
}

export default Header