import React, { useContext } from "react";
import { Context } from "./App";

function Header() {

    let user = useContext(Context)

    return (
        <header className='header'>
            <h1 className="logo">🥐 toasty </h1>
            <h1 className="greeting">Welcome, {user.name}.</h1> {/* //* Make this write the user's name when logged in */}
            <div className="nav-bar">
                <h3 className="nav-link">Start a new order</h3>
                <h3 className="nav-link">Switch users</h3>

            </div>

        </header>
    )
}

export default Header